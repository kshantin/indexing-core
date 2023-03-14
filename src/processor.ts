import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import { BatchHandlerContext, EvmBatchProcessor, LogHandlerContext, LogItem } from "@subsquid/evm-processor";
import {
  CORE_PROXY_ADDRESS,
  METAFORCE_PROXY_ADDRESS,
  ROOT_ID,
  LEVELS,
} from "./constants";
import * as core from "./abi/core";
import * as metaForce from "./abi/meta-force";
import {
  Event,
  LostMoney,
  MarketingReferrerChanged,
  Pack,
  RevenueMFS,
  RevenueStable,
  TimestampEndPack,
  User,
} from "./model";
import { EntityManager } from "typeorm";
import { BigNumber } from "ethers";
import { lookupArchive } from "@subsquid/archive-registry";

const database = new TypeormDatabase();
const processor = new EvmBatchProcessor()
  // Contracts deployment block
  .setBlockRange({ from: 31461665 })
  .setDataSource({
    // uncomment and set RPC_ENDPOONT to enable contract state queries.
    // Both https and wss endpoints are supported.
    // chain: process.env.RPC_ENDPOINT,

    // Change the Archive endpoints for run the squid
    // against the other EVM networks
    // For a full list of supported networks and config options
    // see https://docs.subsquid.io/develop-a-squid/evm-processor/configuration/

    archive: lookupArchive("polygon-mumbai") || "https://polygon-mumbai.archive.subsquid.io",
  })
  .addLog(CORE_PROXY_ADDRESS, {
    filter: [
      [
        core.events.MarketingReferrerChanged.topic,
        core.events.TimestampEndPackSet.topic,
      ],
    ],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
      transaction: {
        hash: true,
      },
    },
  })
  .addLog(METAFORCE_PROXY_ADDRESS, {
    filter: [
      [
        metaForce.events.RevenueMFS.topic,
        metaForce.events.RevenueStable.topic,
        metaForce.events.LostMoney.topic,
      ],
    ],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
      transaction: {
        hash: true,
      },
    },
  });

processor.run(database, async (ctx) => {

  /**
   * @notice - findOrCreateEntity 
   * @doc - https://docs.subsquid.io/tutorials/create-an-ethereum-processing-squid/#managing-the-evm-contract
  */
  async function findOrCreateUser(id: string): Promise<User> {
    const mgr: EntityManager = await ctx.store["em"]();
    const repo = mgr.getTreeRepository(User);

    let user = await repo.findOneBy(({ id }));

    if (!user) {
      user = new User({ id, depth: 0, directReferralsCount: 0 });
      await repo.save(user);

      if (id == ROOT_ID.toString()) {
        const packs = [...Array(LEVELS).keys()].map(
          (level) => new Pack({
            id: `${ROOT_ID.toString()}-${level.toString()}`,
            // TODO - Почему level + 1 ?
            level: level,
            user: user!,
            expiresAt: new Date(4294967294995),
          })
        );
        ctx.log.info("Generate ROOT user packs");
        await ctx.store.save(packs);
      }
    }
    return user;
  }

  // If ROOT user not exist - create it
  if (!await ctx.store.findOneBy(User, {id: "1"})) {
    const root = await findOrCreateUser(ROOT_ID.toString());
    ctx.log.info("Creating ROOT user:");
    ctx.log.info(root);
  }

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.kind === "evmLog") {

        const {evmLog, transaction} = item;

        let event: Event = new Event({
          id: `${transaction.hash}-${evmLog.index.toString()}`,
          createdAt: new Date(block.header.timestamp),
        });

        let user: User | null;

        if (item.address === CORE_PROXY_ADDRESS) {

          const marketingReferrerChanged = 
            core.events.MarketingReferrerChanged;
          const endPackSet = 
            core.events.TimestampEndPackSet;
          
          if (
            evmLog.topics[0] === marketingReferrerChanged.topic
          ) {
            const mgr: EntityManager = await ctx.store["em"]();
            const repo = mgr.getTreeRepository(User);

            const {accountId, marketingReferrer} = 
              marketingReferrerChanged.decode(evmLog);

            user = await repo.findOneBy({
              id: accountId.toString(),
            });

            if (marketingReferrer.isZero()) {
              if (user) {
                const referrer = user.marketingReferrer;
                if (referrer) {
                  referrer.directReferralsCount--;
                  await repo.save(referrer);
                }

                ctx.log.info(`removing user ${user.id}`);
                await repo.remove(user);
              }
              continue;
            }

            if (!user) {
              user = new User({
                id: accountId.toString(),
                depth: 0,
                directReferralsCount: 0,
              });
            }

            if (!accountId.eq(ROOT_ID)) {
              const referrer = await findOrCreateUser(
                marketingReferrer.toString()
              );
              user.marketingReferrer = referrer;
              user.depth = referrer.depth++;

              referrer.directReferralsCount++;
              await repo.save(referrer);
            }

            ctx.log.info(`creating user ${user.id}`);
            await repo.save(user);

            event.eventLog = new MarketingReferrerChanged({
              accountId: accountId.toString(),
            });

            user = new User({ id: marketingReferrer.toString() });
          } else if (
            evmLog.topics[0] === endPackSet.topic
          ) {
            const { accountId, level, timestamp } = endPackSet.decode(evmLog);

            user = await findOrCreateUser(accountId.toString());
            const pack = new Pack({
              id: `${accountId.toString()}-${level.toString()}`,
              level: Number(level),
              user,
              expiresAt: new Date(Number(timestamp) * 1000),
            });
            await ctx.store.save(pack);

            event.eventLog = new TimestampEndPack({
              level: pack.level,
              timestamp: pack.expiresAt,
            });
          }
        } else if (
          item.address === METAFORCE_PROXY_ADDRESS
        ) {
          const revenueMFS = metaForce.events.RevenueMFS;
          const revenueStable = metaForce.events.RevenueStable;
          const lostMoney = metaForce.events.LostMoney;

          let userAccountId: BigNumber | null;

          if (evmLog.topics[0] === revenueMFS.topic) {
            const { fromId, accountId, amount } = revenueMFS.decode(evmLog);
            userAccountId = accountId;

            event.eventLog = new RevenueMFS({
              from: fromId.toString(),
              amount: amount.toBigInt(),
            });
          } else if (evmLog.topics[0] === revenueStable.topic) {
            const { fromId, accountId, amount } = revenueStable.decode(evmLog);
            userAccountId = accountId;

            event.eventLog = new RevenueStable({
              from: fromId.toString(),
              amount: amount.toBigInt(),
            })
          } else if (evmLog.topics[0] === lostMoney.topic) {
            const { fromId, accountId, amount } = lostMoney.decode(evmLog);
            userAccountId = accountId;

            event.eventLog = new LostMoney({
              from: fromId.toString(),
              amount: amount.toBigInt(),
            })
          }

          user = await findOrCreateUser(userAccountId!.toString());
        }

        event.user = user!;
        // Logs events if needed
        //ctx.log.info(`Processing Event ${event.id} for User ${event.user.id}`);
        await ctx.store.save(event);
      }
    }
  }
});


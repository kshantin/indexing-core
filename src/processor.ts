import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EvmBatchProcessor } from "@subsquid/evm-processor";
import {
  METACORE_ADDRESS,
  METAFORCE_ADDRESS,
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
  .addLog(METACORE_ADDRESS, {
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
  .addLog(METAFORCE_ADDRESS, {
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
  
});


import { Arg, Field, ObjectType, Query, Resolver } from "type-graphql";
import { EntityManager } from "typeorm";
import { User } from "../../model";


@ObjectType()
export class Revenue {
  @Field(type => String, { nullable: false })
  revenue!: string;

  constructor(props: Partial<Revenue>) {
    Object.assign(this, props);
  }
}

@Resolver()
export class RevenueResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  /**
   * 
   * @param userId user Id in MetaForce
   * @param timeInterval what period of time are revenues selected
   * @param limit how much revenues to fetch
   * @param fromRegister start from account registration date?
   * @returns 
   */
  @Query(() => [Revenue])
  async revenueMFS(
    @Arg("userId", { nullable: false }) userId: number,
    @Arg("timeInerval", { nullable: false }) timeInterval: string,
    @Arg("amountDiv", { nullable: false }) limit: number,
    @Arg("fromRegister", { nullable: false, defaultValue: false }) fromRegister: boolean,
  ): Promise<Revenue[]> {

    const manager = await this.tx();

    const from = fromRegister ? `'2020-01-01'::timestamp` : `now() - '${timeInterval}'::interval`;

    const revenueQuery = `
    WITH revenues AS (
      SELECT span.bin, 
      COALESCE(SUM((e.event ->> 'amount')::numeric(78, 0)), 0) AS revenue
      FROM generate_series(${from}, now(), '${timeInterval}'::interval / ${limit}) span(bin) 
      LEFT JOIN event e ON e.created_at >= span.bin AND e.created_at < span.bin + '${timeInterval}'::interval / ${limit}
      AND e.event @> '{"isTypeOf": "RevenueMFS"}' AND e.user_id = '${userId.toString()}'
      GROUP BY span.bin ORDER BY span.bin
    ) SELECT SUM(rs.revenue) OVER (ORDER BY rs.bin ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS revenue FROM revenues rs ORDER BY rs.bin DESC limit ${limit};
    `
    const result = await manager.getTreeRepository(User).query(revenueQuery);
    
    // if page size greater than data
    while (result.length < limit) {
      result.push({ revenue: "0" });
    }

    return result;

  }

  /**
   * @notice Same as revenueMFS but with Stablecoin
   */
  @Query(() => [Revenue])
  async revenueStable(
    @Arg("userId", { nullable: false }) userId: number,
    @Arg("timeInerval", { nullable: false }) timeInterval: string,
    @Arg("amountDiv", { nullable: false }) limit: number,
    @Arg("fromRegister", { nullable: false, defaultValue: false }) fromRegister: boolean,
  ): Promise<Revenue[]> {

    const manager = await this.tx();

    const from = fromRegister ? `'2020-01-01'::timestamp` : `now() - '${timeInterval}'::interval`;

    const revenueQuery = `
    WITH revenues AS (
      SELECT span.bin, 
      COALESCE(SUM((e.event ->> 'amount')::numeric(78, 0)), 0) AS revenue
      FROM generate_series(${from}, now(), '${timeInterval}'::interval / ${limit}) span(bin) 
      LEFT JOIN event e ON e.created_at >= span.bin AND e.created_at < span.bin + '${timeInterval}'::interval / ${limit}
      AND e.event @> '{"isTypeOf": "RevenueStable"}' AND e.user_id = '${userId.toString()}'
      GROUP BY span.bin ORDER BY span.bin
    ) SELECT SUM(rs.revenue) OVER (ORDER BY rs.bin ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS revenue FROM revenues rs ORDER BY rs.bin DESC limit ${limit};
    `
    const result = await manager.getTreeRepository(User).query(revenueQuery);
    
    while (result.length < limit) {
      result.push({ revenue: "0" });
    }

    return result;

  }
}
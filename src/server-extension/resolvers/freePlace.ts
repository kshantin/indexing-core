import {ObjectType, Field, Resolver, Query, Arg} from "type-graphql";
import { EntityManager } from "typeorm";
import { User } from "../../model";

@ObjectType()
export class SearchFreePlace {
  @Field(type => String, {nullable: true})
  freePlace!: string;
  @Field(type => Boolean, {nullable: true})
  replace!: boolean;

  constructor (props: Partial<SearchFreePlace>) {
      Object.assign(this, props);
  }
}

@ObjectType()
export class TreeNode {
  @Field(type => Number, {nullable: true})
  id!: number;

  constructor (props: Partial<TreeNode>) {
      Object.assign(this, props);
  }
}

@Resolver()
export class TreeNodeResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(type => SearchFreePlace)
  async searchFreePlace(
    @Arg("referrerId", {nullable: false}) 
    referrerId: number
  ): Promise<SearchFreePlace> {

    const manager = await this.tx();

    // TODO - add PostgreSQL query
    const searchQuery = `
    select 
      u.id as freePlace,  
      (count(*) - sum(
        case when (
          expires_at + '1 month'::interval < now()
        ) then 1 else 0 end
      ) <= 0) as replace 
    from 
      user_closure as uc 
      join public.user as u on u.id = uc.id_descendant
      join pack as p on p.user_id = u.id 
    where 
      uc.id_ancestor = '${referrerId.toString()}'
    group by 
      u.id 
    having
      count(*) = sum(
        case when (
          expires_at + '1 month'::interval < now()
        ) then 1 else 0 end
      ) 
      or u.direct_referrals_count < 2 
    order by 
      u.depth, sum(
        case when (
          expires_at + '1 month'::interval < now()
        ) then 1 else 0 end
      ) desc, u.direct_referrals_count
    limit 1;
    `;

    const queryResult = await manager
    .getTreeRepository(User)
    .query(searchQuery);

    if (queryResult.length === 0) {
      return new SearchFreePlace({});
    }
    
    const res = queryResult.pop();

    return {
      freePlace: res.freePlace,
      replace: res.replace,
    };
  }
}
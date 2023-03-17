import { type } from "os";
import {ObjectType, Field, Resolver, Query, Arg} from "type-graphql";
import { EntityManager } from "typeorm";
import { User } from "../model";

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
  constructor(private manager: EntityManager) {}

  @Query(type => SearchFreePlace)
  async searchFreePlace(
      @Arg("referrerId", {nullable: false}) 
      referrerId: number
  ): Promise<SearchFreePlace> {

      // TODO - add PostgreSQL query
      const searchQuery = ``;

      const queryResult = await this.manager
      .getTreeRepository(User)
      .query(searchQuery);
      
      const res = queryResult.pop();

      return {
        freePlace: res.freePlace,
        replace: res.replace,
      };
  }
}
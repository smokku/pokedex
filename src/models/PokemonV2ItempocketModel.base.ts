/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemcategoryAggregateModel, PokemonV2ItemcategoryAggregateModelType } from "./PokemonV2ItemcategoryAggregateModel"
import { PokemonV2ItemcategoryAggregateModelSelector } from "./PokemonV2ItemcategoryAggregateModel.base"
import { PokemonV2ItemcategoryModel, PokemonV2ItemcategoryModelType } from "./PokemonV2ItemcategoryModel"
import { PokemonV2ItemcategoryModelSelector } from "./PokemonV2ItemcategoryModel.base"
import { PokemonV2ItempocketnameAggregateModel, PokemonV2ItempocketnameAggregateModelType } from "./PokemonV2ItempocketnameAggregateModel"
import { PokemonV2ItempocketnameAggregateModelSelector } from "./PokemonV2ItempocketnameAggregateModel.base"
import { PokemonV2ItempocketnameModel, PokemonV2ItempocketnameModelType } from "./PokemonV2ItempocketnameModel"
import { PokemonV2ItempocketnameModelSelector } from "./PokemonV2ItempocketnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketBase
 * auto generated base class for the model PokemonV2ItempocketModel.
 *
 * columns and relationships of "pokemon_v2_itempocket"
 */
export const PokemonV2ItempocketModelBase = ModelBase
  .named('PokemonV2Itempocket')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket"), "pokemon_v2_itempocket"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_itemcategories: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemcategoryModel))),
    /** An aggregate relationship */
    pokemon_v2_itemcategories_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemcategoryAggregateModel)),
    /** An array relationship */
    pokemon_v2_itempocketnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItempocketnameModel))),
    /** An aggregate relationship */
    pokemon_v2_itempocketnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItempocketnameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_itemcategories(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`pokemon_v2_itemcategories`, PokemonV2ItemcategoryModelSelector, builder) }
  pokemon_v2_itemcategories_aggregate(builder?: string | PokemonV2ItemcategoryAggregateModelSelector | ((selector: PokemonV2ItemcategoryAggregateModelSelector) => PokemonV2ItemcategoryAggregateModelSelector)) { return this.__child(`pokemon_v2_itemcategories_aggregate`, PokemonV2ItemcategoryAggregateModelSelector, builder) }
  pokemon_v2_itempocketnames(builder?: string | PokemonV2ItempocketnameModelSelector | ((selector: PokemonV2ItempocketnameModelSelector) => PokemonV2ItempocketnameModelSelector)) { return this.__child(`pokemon_v2_itempocketnames`, PokemonV2ItempocketnameModelSelector, builder) }
  pokemon_v2_itempocketnames_aggregate(builder?: string | PokemonV2ItempocketnameAggregateModelSelector | ((selector: PokemonV2ItempocketnameAggregateModelSelector) => PokemonV2ItempocketnameAggregateModelSelector)) { return this.__child(`pokemon_v2_itempocketnames_aggregate`, PokemonV2ItempocketnameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Itempocket() {
  return new PokemonV2ItempocketModelSelector()
}

export const pokemonV2ItempocketModelPrimitives = selectFromPokemonV2Itempocket().name

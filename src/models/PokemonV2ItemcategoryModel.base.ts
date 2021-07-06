/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemAggregateModel, PokemonV2ItemAggregateModelType } from "./PokemonV2ItemAggregateModel"
import { PokemonV2ItemAggregateModelSelector } from "./PokemonV2ItemAggregateModel.base"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { PokemonV2ItemcategorynameAggregateModel, PokemonV2ItemcategorynameAggregateModelType } from "./PokemonV2ItemcategorynameAggregateModel"
import { PokemonV2ItemcategorynameAggregateModelSelector } from "./PokemonV2ItemcategorynameAggregateModel.base"
import { PokemonV2ItemcategorynameModel, PokemonV2ItemcategorynameModelType } from "./PokemonV2ItemcategorynameModel"
import { PokemonV2ItemcategorynameModelSelector } from "./PokemonV2ItemcategorynameModel.base"
import { PokemonV2ItempocketModel, PokemonV2ItempocketModelType } from "./PokemonV2ItempocketModel"
import { PokemonV2ItempocketModelSelector } from "./PokemonV2ItempocketModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryBase
 * auto generated base class for the model PokemonV2ItemcategoryModel.
 *
 * columns and relationships of "pokemon_v2_itemcategory"
 */
export const PokemonV2ItemcategoryModelBase = ModelBase
  .named('PokemonV2Itemcategory')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory"), "pokemon_v2_itemcategory"),
    id: types.union(types.undefined, types.integer),
    item_pocket_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_itemcategorynames: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemcategorynameModel))),
    /** An aggregate relationship */
    pokemon_v2_itemcategorynames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemcategorynameAggregateModel)),
    /** An object relationship */
    pokemon_v2_itempocket: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketModel)),
    /** An array relationship */
    pokemon_v2_items: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemModel))),
    /** An aggregate relationship */
    pokemon_v2_items_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_itemcategorynames(builder?: string | PokemonV2ItemcategorynameModelSelector | ((selector: PokemonV2ItemcategorynameModelSelector) => PokemonV2ItemcategorynameModelSelector)) { return this.__child(`pokemon_v2_itemcategorynames`, PokemonV2ItemcategorynameModelSelector, builder) }
  pokemon_v2_itemcategorynames_aggregate(builder?: string | PokemonV2ItemcategorynameAggregateModelSelector | ((selector: PokemonV2ItemcategorynameAggregateModelSelector) => PokemonV2ItemcategorynameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemcategorynames_aggregate`, PokemonV2ItemcategorynameAggregateModelSelector, builder) }
  pokemon_v2_itempocket(builder?: string | PokemonV2ItempocketModelSelector | ((selector: PokemonV2ItempocketModelSelector) => PokemonV2ItempocketModelSelector)) { return this.__child(`pokemon_v2_itempocket`, PokemonV2ItempocketModelSelector, builder) }
  pokemon_v2_items(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_items`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_items_aggregate(builder?: string | PokemonV2ItemAggregateModelSelector | ((selector: PokemonV2ItemAggregateModelSelector) => PokemonV2ItemAggregateModelSelector)) { return this.__child(`pokemon_v2_items_aggregate`, PokemonV2ItemAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Itemcategory() {
  return new PokemonV2ItemcategoryModelSelector()
}

export const pokemonV2ItemcategoryModelPrimitives = selectFromPokemonV2Itemcategory().item_pocket_id.name

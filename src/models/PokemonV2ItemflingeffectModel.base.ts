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
import { PokemonV2ItemflingeffecteffecttextAggregateModel, PokemonV2ItemflingeffecteffecttextAggregateModelType } from "./PokemonV2ItemflingeffecteffecttextAggregateModel"
import { PokemonV2ItemflingeffecteffecttextAggregateModelSelector } from "./PokemonV2ItemflingeffecteffecttextAggregateModel.base"
import { PokemonV2ItemflingeffecteffecttextModel, PokemonV2ItemflingeffecteffecttextModelType } from "./PokemonV2ItemflingeffecteffecttextModel"
import { PokemonV2ItemflingeffecteffecttextModelSelector } from "./PokemonV2ItemflingeffecteffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectBase
 * auto generated base class for the model PokemonV2ItemflingeffectModel.
 *
 * columns and relationships of "pokemon_v2_itemflingeffect"
 */
export const PokemonV2ItemflingeffectModelBase = ModelBase
  .named('PokemonV2Itemflingeffect')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect"), "pokemon_v2_itemflingeffect"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_itemflingeffecteffecttexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflingeffecteffecttextModel))),
    /** An aggregate relationship */
    pokemon_v2_itemflingeffecteffecttexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemflingeffecteffecttextAggregateModel)),
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

export class PokemonV2ItemflingeffectModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_itemflingeffecteffecttexts(builder?: string | PokemonV2ItemflingeffecteffecttextModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextModelSelector) => PokemonV2ItemflingeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttexts`, PokemonV2ItemflingeffecteffecttextModelSelector, builder) }
  pokemon_v2_itemflingeffecteffecttexts_aggregate(builder?: string | PokemonV2ItemflingeffecteffecttextAggregateModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextAggregateModelSelector) => PokemonV2ItemflingeffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflingeffecteffecttexts_aggregate`, PokemonV2ItemflingeffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_items(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_items`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_items_aggregate(builder?: string | PokemonV2ItemAggregateModelSelector | ((selector: PokemonV2ItemAggregateModelSelector) => PokemonV2ItemAggregateModelSelector)) { return this.__child(`pokemon_v2_items_aggregate`, PokemonV2ItemAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Itemflingeffect() {
  return new PokemonV2ItemflingeffectModelSelector()
}

export const pokemonV2ItemflingeffectModelPrimitives = selectFromPokemonV2Itemflingeffect().name

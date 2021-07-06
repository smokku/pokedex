/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectAvgFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemflingeffectAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_avg_fields"), "pokemon_v2_itemflingeffect_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemflingeffectAvgFields() {
  return new PokemonV2ItemflingeffectAvgFieldsModelSelector()
}

export const pokemonV2ItemflingeffectAvgFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectAvgFields()

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodAvgFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EncountermethodAvgFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_avg_fields"), "pokemon_v2_encountermethod_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodAvgFields() {
  return new PokemonV2EncountermethodAvgFieldsModelSelector()
}

export const pokemonV2EncountermethodAvgFieldsModelPrimitives = selectFromPokemonV2EncountermethodAvgFields().order

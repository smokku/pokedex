/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateAvgFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2GrowthrateAvgFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_avg_fields"), "pokemon_v2_growthrate_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GrowthrateAvgFields() {
  return new PokemonV2GrowthrateAvgFieldsModelSelector()
}

export const pokemonV2GrowthrateAvgFieldsModelPrimitives = selectFromPokemonV2GrowthrateAvgFields()

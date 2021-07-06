/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectAvgFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2SupercontesteffectAvgFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_avg_fields"), "pokemon_v2_supercontesteffect_avg_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectAvgFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectAvgFields() {
  return new PokemonV2SupercontesteffectAvgFieldsModelSelector()
}

export const pokemonV2SupercontesteffectAvgFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectAvgFields().appeal

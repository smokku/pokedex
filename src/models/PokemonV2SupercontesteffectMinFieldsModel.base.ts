/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectMinFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2SupercontesteffectMinFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_min_fields"), "pokemon_v2_supercontesteffect_min_fields"),
    appeal: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectMinFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectMinFields() {
  return new PokemonV2SupercontesteffectMinFieldsModelSelector()
}

export const pokemonV2SupercontesteffectMinFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectMinFields().appeal

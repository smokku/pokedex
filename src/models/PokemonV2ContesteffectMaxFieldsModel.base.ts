/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectMaxFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ContesteffectMaxFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_max_fields"), "pokemon_v2_contesteffect_max_fields"),
    appeal: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    jam: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectMaxFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
}
export function selectFromPokemonV2ContesteffectMaxFields() {
  return new PokemonV2ContesteffectMaxFieldsModelSelector()
}

export const pokemonV2ContesteffectMaxFieldsModelPrimitives = selectFromPokemonV2ContesteffectMaxFields().appeal.jam

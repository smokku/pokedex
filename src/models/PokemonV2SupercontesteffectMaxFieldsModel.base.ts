/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectMaxFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2SupercontesteffectMaxFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_max_fields"), "pokemon_v2_supercontesteffect_max_fields"),
    appeal: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectMaxFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectMaxFields() {
  return new PokemonV2SupercontesteffectMaxFieldsModelSelector()
}

export const pokemonV2SupercontesteffectMaxFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectMaxFields().appeal

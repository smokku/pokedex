/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectVarSampFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2SupercontesteffectVarSampFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_var_samp_fields"), "pokemon_v2_supercontesteffect_var_samp_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectVarSampFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectVarSampFields() {
  return new PokemonV2SupercontesteffectVarSampFieldsModelSelector()
}

export const pokemonV2SupercontesteffectVarSampFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectVarSampFields().appeal

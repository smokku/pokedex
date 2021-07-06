/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodVarSampFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncountermethodVarSampFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_var_samp_fields"), "pokemon_v2_encountermethod_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodVarSampFields() {
  return new PokemonV2EncountermethodVarSampFieldsModelSelector()
}

export const pokemonV2EncountermethodVarSampFieldsModelPrimitives = selectFromPokemonV2EncountermethodVarSampFields().order

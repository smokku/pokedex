/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameVarSampFieldsBase
 * auto generated base class for the model PokemonV2TypenameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2TypenameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2TypenameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_var_samp_fields"), "pokemon_v2_typename_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameVarSampFields() {
  return new PokemonV2TypenameVarSampFieldsModelSelector()
}

export const pokemonV2TypenameVarSampFieldsModelPrimitives = selectFromPokemonV2TypenameVarSampFields().language_id.type_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokeathlonstatnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname_var_pop_fields"), "pokemon_v2_pokeathlonstatname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2PokeathlonstatnameVarPopFields() {
  return new PokemonV2PokeathlonstatnameVarPopFieldsModelSelector()
}

export const pokemonV2PokeathlonstatnameVarPopFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatnameVarPopFields().language_id.pokeathlon_stat_id

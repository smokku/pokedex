/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypepastVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemontypepastVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemontypepastVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypepastVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontypepast_var_samp_fields"), "pokemon_v2_pokemontypepast_var_samp_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    slot: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypepastVarSampFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypepastVarSampFields() {
  return new PokemonV2PokemontypepastVarSampFieldsModelSelector()
}

export const pokemonV2PokemontypepastVarSampFieldsModelPrimitives = selectFromPokemonV2PokemontypepastVarSampFields().generation_id.pokemon_id.slot.type_id

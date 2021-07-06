/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemontypeVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemontypeVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypeVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_var_pop_fields"), "pokemon_v2_pokemontype_var_pop_fields"),
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

export class PokemonV2PokemontypeVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypeVarPopFields() {
  return new PokemonV2PokemontypeVarPopFieldsModelSelector()
}

export const pokemonV2PokemontypeVarPopFieldsModelPrimitives = selectFromPokemonV2PokemontypeVarPopFields().pokemon_id.slot.type_id

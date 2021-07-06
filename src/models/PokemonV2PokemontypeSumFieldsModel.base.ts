/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeSumFieldsBase
 * auto generated base class for the model PokemonV2PokemontypeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemontypeSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_sum_fields"), "pokemon_v2_pokemontype_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    slot: types.union(types.undefined, types.null, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypeSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypeSumFields() {
  return new PokemonV2PokemontypeSumFieldsModelSelector()
}

export const pokemonV2PokemontypeSumFieldsModelPrimitives = selectFromPokemonV2PokemontypeSumFields().pokemon_id.slot.type_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeMinFieldsBase
 * auto generated base class for the model PokemonV2PokemontypeMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemontypeMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypeMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_min_fields"), "pokemon_v2_pokemontype_min_fields"),
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

export class PokemonV2PokemontypeMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypeMinFields() {
  return new PokemonV2PokemontypeMinFieldsModelSelector()
}

export const pokemonV2PokemontypeMinFieldsModelPrimitives = selectFromPokemonV2PokemontypeMinFields().pokemon_id.slot.type_id

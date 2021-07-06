/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemontypeMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemontypeMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypeMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_max_fields"), "pokemon_v2_pokemontype_max_fields"),
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

export class PokemonV2PokemontypeMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypeMaxFields() {
  return new PokemonV2PokemontypeMaxFieldsModelSelector()
}

export const pokemonV2PokemontypeMaxFieldsModelPrimitives = selectFromPokemonV2PokemontypeMaxFields().pokemon_id.slot.type_id

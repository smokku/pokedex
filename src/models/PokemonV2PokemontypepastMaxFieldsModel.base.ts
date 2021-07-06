/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypepastMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemontypepastMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemontypepastMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypepastMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontypepast_max_fields"), "pokemon_v2_pokemontypepast_max_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
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

export class PokemonV2PokemontypepastMaxFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypepastMaxFields() {
  return new PokemonV2PokemontypepastMaxFieldsModelSelector()
}

export const pokemonV2PokemontypepastMaxFieldsModelPrimitives = selectFromPokemonV2PokemontypepastMaxFields().generation_id.pokemon_id.slot.type_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypepastAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemontypepastAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemontypepastAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypepastAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontypepast_avg_fields"), "pokemon_v2_pokemontypepast_avg_fields"),
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

export class PokemonV2PokemontypepastAvgFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypepastAvgFields() {
  return new PokemonV2PokemontypepastAvgFieldsModelSelector()
}

export const pokemonV2PokemontypepastAvgFieldsModelPrimitives = selectFromPokemonV2PokemontypepastAvgFields().generation_id.pokemon_id.slot.type_id

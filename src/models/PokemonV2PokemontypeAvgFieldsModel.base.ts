/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemontypeAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemontypeAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypeAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_avg_fields"), "pokemon_v2_pokemontype_avg_fields"),
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

export class PokemonV2PokemontypeAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypeAvgFields() {
  return new PokemonV2PokemontypeAvgFieldsModelSelector()
}

export const pokemonV2PokemontypeAvgFieldsModelPrimitives = selectFromPokemonV2PokemontypeAvgFields().pokemon_id.slot.type_id

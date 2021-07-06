/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformtypeAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonformtypeAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonformtypeAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformtypeAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformtype_avg_fields"), "pokemon_v2_pokemonformtype_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
    slot: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformtypeAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemonformtypeAvgFields() {
  return new PokemonV2PokemonformtypeAvgFieldsModelSelector()
}

export const pokemonV2PokemonformtypeAvgFieldsModelPrimitives = selectFromPokemonV2PokemonformtypeAvgFields().pokemon_form_id.slot.type_id

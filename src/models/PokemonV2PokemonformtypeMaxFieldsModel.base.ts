/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformtypeMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonformtypeMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformtypeMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformtypeMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformtype_max_fields"), "pokemon_v2_pokemonformtype_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    slot: types.union(types.undefined, types.null, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformtypeMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemonformtypeMaxFields() {
  return new PokemonV2PokemonformtypeMaxFieldsModelSelector()
}

export const pokemonV2PokemonformtypeMaxFieldsModelPrimitives = selectFromPokemonV2PokemonformtypeMaxFields().pokemon_form_id.slot.type_id

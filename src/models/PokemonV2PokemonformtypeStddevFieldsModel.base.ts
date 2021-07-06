/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformtypeStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonformtypeStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformtypeStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformtypeStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformtype_stddev_fields"), "pokemon_v2_pokemonformtype_stddev_fields"),
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

export class PokemonV2PokemonformtypeStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemonformtypeStddevFields() {
  return new PokemonV2PokemonformtypeStddevFieldsModelSelector()
}

export const pokemonV2PokemonformtypeStddevFieldsModelPrimitives = selectFromPokemonV2PokemonformtypeStddevFields().pokemon_form_id.slot.type_id

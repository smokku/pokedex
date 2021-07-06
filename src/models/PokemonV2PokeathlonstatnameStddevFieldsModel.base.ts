/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameStddevFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokeathlonstatnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname_stddev_fields"), "pokemon_v2_pokeathlonstatname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2PokeathlonstatnameStddevFields() {
  return new PokemonV2PokeathlonstatnameStddevFieldsModelSelector()
}

export const pokemonV2PokeathlonstatnameStddevFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatnameStddevFields().language_id.pokeathlon_stat_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokeathlonstatnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname_stddev_samp_fields"), "pokemon_v2_pokeathlonstatname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2PokeathlonstatnameStddevSampFields() {
  return new PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector()
}

export const pokemonV2PokeathlonstatnameStddevSampFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatnameStddevSampFields().language_id.pokeathlon_stat_id

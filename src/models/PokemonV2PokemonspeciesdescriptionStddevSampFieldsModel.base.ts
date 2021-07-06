/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesdescriptionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesdescriptionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesdescription_stddev_samp_fields"), "pokemon_v2_pokemonspeciesdescription_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesdescriptionStddevSampFields() {
  return new PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector()
}

export const pokemonV2PokemonspeciesdescriptionStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesdescriptionStddevSampFields().language_id.pokemon_species_id

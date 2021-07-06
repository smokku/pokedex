/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexdescriptionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokedexdescriptionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokedexdescriptionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokedexdescriptionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexdescription_stddev_samp_fields"), "pokemon_v2_pokedexdescription_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexdescriptionStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexdescriptionStddevSampFields() {
  return new PokemonV2PokedexdescriptionStddevSampFieldsModelSelector()
}

export const pokemonV2PokedexdescriptionStddevSampFieldsModelPrimitives = selectFromPokemonV2PokedexdescriptionStddevSampFields().language_id.pokedex_id

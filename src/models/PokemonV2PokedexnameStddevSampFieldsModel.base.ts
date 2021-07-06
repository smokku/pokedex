/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokedexnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokedexnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokedexnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexname_stddev_samp_fields"), "pokemon_v2_pokedexname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexnameStddevSampFields() {
  return new PokemonV2PokedexnameStddevSampFieldsModelSelector()
}

export const pokemonV2PokedexnameStddevSampFieldsModelPrimitives = selectFromPokemonV2PokedexnameStddevSampFields().language_id.pokedex_id

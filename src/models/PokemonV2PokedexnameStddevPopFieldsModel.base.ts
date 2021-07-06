/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexnameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokedexnameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokedexnameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokedexnameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexname_stddev_pop_fields"), "pokemon_v2_pokedexname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexnameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexnameStddevPopFields() {
  return new PokemonV2PokedexnameStddevPopFieldsModelSelector()
}

export const pokemonV2PokedexnameStddevPopFieldsModelPrimitives = selectFromPokemonV2PokedexnameStddevPopFields().language_id.pokedex_id

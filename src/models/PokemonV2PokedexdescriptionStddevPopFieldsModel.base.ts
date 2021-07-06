/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexdescriptionStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokedexdescriptionStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokedexdescriptionStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokedexdescriptionStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexdescription_stddev_pop_fields"), "pokemon_v2_pokedexdescription_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexdescriptionStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexdescriptionStddevPopFields() {
  return new PokemonV2PokedexdescriptionStddevPopFieldsModelSelector()
}

export const pokemonV2PokedexdescriptionStddevPopFieldsModelPrimitives = selectFromPokemonV2PokedexdescriptionStddevPopFields().language_id.pokedex_id

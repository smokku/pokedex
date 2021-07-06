/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexdescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2PokedexdescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokedexdescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2PokedexdescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexdescription_sum_fields"), "pokemon_v2_pokedexdescription_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexdescriptionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexdescriptionSumFields() {
  return new PokemonV2PokedexdescriptionSumFieldsModelSelector()
}

export const pokemonV2PokedexdescriptionSumFieldsModelPrimitives = selectFromPokemonV2PokedexdescriptionSumFields().language_id.pokedex_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexnameSumFieldsBase
 * auto generated base class for the model PokemonV2PokedexnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokedexnameSumFieldsModelBase = ModelBase
  .named('PokemonV2PokedexnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexname_sum_fields"), "pokemon_v2_pokedexname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexnameSumFields() {
  return new PokemonV2PokedexnameSumFieldsModelSelector()
}

export const pokemonV2PokedexnameSumFieldsModelPrimitives = selectFromPokemonV2PokedexnameSumFields().language_id.pokedex_id

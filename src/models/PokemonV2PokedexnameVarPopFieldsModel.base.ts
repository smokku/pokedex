/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokedexnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokedexnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokedexnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexname_var_pop_fields"), "pokemon_v2_pokedexname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexnameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexnameVarPopFields() {
  return new PokemonV2PokedexnameVarPopFieldsModelSelector()
}

export const pokemonV2PokedexnameVarPopFieldsModelPrimitives = selectFromPokemonV2PokedexnameVarPopFields().language_id.pokedex_id

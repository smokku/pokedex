/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokedexVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokedexVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokedexVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_var_pop_fields"), "pokemon_v2_pokedex_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2PokedexVarPopFields() {
  return new PokemonV2PokedexVarPopFieldsModelSelector()
}

export const pokemonV2PokedexVarPopFieldsModelPrimitives = selectFromPokemonV2PokedexVarPopFields().region_id

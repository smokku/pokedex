/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformspritesVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_var_pop_fields"), "pokemon_v2_pokemonformsprites_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesVarPopFields() {
  return new PokemonV2PokemonformspritesVarPopFieldsModelSelector()
}

export const pokemonV2PokemonformspritesVarPopFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesVarPopFields().pokemon_form_id

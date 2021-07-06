/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonformnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_var_pop_fields"), "pokemon_v2_pokemonformname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformnameVarPopFields() {
  return new PokemonV2PokemonformnameVarPopFieldsModelSelector()
}

export const pokemonV2PokemonformnameVarPopFieldsModelPrimitives = selectFromPokemonV2PokemonformnameVarPopFields().language_id.pokemon_form_id

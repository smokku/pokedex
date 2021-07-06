/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonformnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformnameSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_sum_fields"), "pokemon_v2_pokemonformname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformnameSumFields() {
  return new PokemonV2PokemonformnameSumFieldsModelSelector()
}

export const pokemonV2PokemonformnameSumFieldsModelPrimitives = selectFromPokemonV2PokemonformnameSumFields().language_id.pokemon_form_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformspritesSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_sum_fields"), "pokemon_v2_pokemonformsprites_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesSumFields() {
  return new PokemonV2PokemonformspritesSumFieldsModelSelector()
}

export const pokemonV2PokemonformspritesSumFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesSumFields().pokemon_form_id

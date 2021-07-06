/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonformspritesAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_avg_fields"), "pokemon_v2_pokemonformsprites_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesAvgFields() {
  return new PokemonV2PokemonformspritesAvgFieldsModelSelector()
}

export const pokemonV2PokemonformspritesAvgFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesAvgFields().pokemon_form_id

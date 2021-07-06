/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonspritesVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_variance_fields"), "pokemon_v2_pokemonsprites_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
}
export function selectFromPokemonV2PokemonspritesVarianceFields() {
  return new PokemonV2PokemonspritesVarianceFieldsModelSelector()
}

export const pokemonV2PokemonspritesVarianceFieldsModelPrimitives = selectFromPokemonV2PokemonspritesVarianceFields().pokemon_id

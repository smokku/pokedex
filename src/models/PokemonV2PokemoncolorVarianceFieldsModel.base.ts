/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolorVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemoncolorVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolorVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_variance_fields"), "pokemon_v2_pokemoncolor_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemoncolorVarianceFields() {
  return new PokemonV2PokemoncolorVarianceFieldsModelSelector()
}

export const pokemonV2PokemoncolorVarianceFieldsModelPrimitives = selectFromPokemonV2PokemoncolorVarianceFields()

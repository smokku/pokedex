/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaMinFieldsBase
 * auto generated base class for the model PokemonV2PalparkareaMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PalparkareaMinFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareaMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_min_fields"), "pokemon_v2_palparkarea_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2PalparkareaMinFields() {
  return new PokemonV2PalparkareaMinFieldsModelSelector()
}

export const pokemonV2PalparkareaMinFieldsModelPrimitives = selectFromPokemonV2PalparkareaMinFields().name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaVarianceFieldsBase
 * auto generated base class for the model PokemonV2PalparkareaVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PalparkareaVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareaVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_variance_fields"), "pokemon_v2_palparkarea_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PalparkareaVarianceFields() {
  return new PokemonV2PalparkareaVarianceFieldsModelSelector()
}

export const pokemonV2PalparkareaVarianceFieldsModelPrimitives = selectFromPokemonV2PalparkareaVarianceFields()

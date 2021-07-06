/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategoryVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategoryVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetacategoryVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategoryVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategory_variance_fields"), "pokemon_v2_movemetacategory_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategoryVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetacategoryVarianceFields() {
  return new PokemonV2MovemetacategoryVarianceFieldsModelSelector()
}

export const pokemonV2MovemetacategoryVarianceFieldsModelPrimitives = selectFromPokemonV2MovemetacategoryVarianceFields()

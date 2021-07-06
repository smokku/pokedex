/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderVarianceFieldsBase
 * auto generated base class for the model PokemonV2GenderVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2GenderVarianceFieldsModelBase = ModelBase
  .named('PokemonV2GenderVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_variance_fields"), "pokemon_v2_gender_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GenderVarianceFields() {
  return new PokemonV2GenderVarianceFieldsModelSelector()
}

export const pokemonV2GenderVarianceFieldsModelPrimitives = selectFromPokemonV2GenderVarianceFields()

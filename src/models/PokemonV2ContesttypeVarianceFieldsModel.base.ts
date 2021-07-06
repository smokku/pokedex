/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeVarianceFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesttypeVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_variance_fields"), "pokemon_v2_contesttype_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ContesttypeVarianceFields() {
  return new PokemonV2ContesttypeVarianceFieldsModelSelector()
}

export const pokemonV2ContesttypeVarianceFieldsModelPrimitives = selectFromPokemonV2ContesttypeVarianceFields()

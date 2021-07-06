/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItempocketVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItempocketVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_variance_fields"), "pokemon_v2_itempocket_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItempocketVarianceFields() {
  return new PokemonV2ItempocketVarianceFieldsModelSelector()
}

export const pokemonV2ItempocketVarianceFieldsModelPrimitives = selectFromPokemonV2ItempocketVarianceFields()

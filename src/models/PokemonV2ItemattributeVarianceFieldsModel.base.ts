/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItemattributeVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemattributeVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributeVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute_variance_fields"), "pokemon_v2_itemattribute_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemattributeVarianceFields() {
  return new PokemonV2ItemattributeVarianceFieldsModelSelector()
}

export const pokemonV2ItemattributeVarianceFieldsModelPrimitives = selectFromPokemonV2ItemattributeVarianceFields()

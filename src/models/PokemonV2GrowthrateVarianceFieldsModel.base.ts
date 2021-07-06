/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateVarianceFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2GrowthrateVarianceFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_variance_fields"), "pokemon_v2_growthrate_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GrowthrateVarianceFields() {
  return new PokemonV2GrowthrateVarianceFieldsModelSelector()
}

export const pokemonV2GrowthrateVarianceFieldsModelPrimitives = selectFromPokemonV2GrowthrateVarianceFields()

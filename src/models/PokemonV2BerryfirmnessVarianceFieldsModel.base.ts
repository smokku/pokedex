/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessVarianceFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryfirmnessVarianceFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_variance_fields"), "pokemon_v2_berryfirmness_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryfirmnessVarianceFields() {
  return new PokemonV2BerryfirmnessVarianceFieldsModelSelector()
}

export const pokemonV2BerryfirmnessVarianceFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessVarianceFields()

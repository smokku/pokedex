/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovetargetVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovetargetVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_variance_fields"), "pokemon_v2_movetarget_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovetargetVarianceFields() {
  return new PokemonV2MovetargetVarianceFieldsModelSelector()
}

export const pokemonV2MovetargetVarianceFieldsModelPrimitives = selectFromPokemonV2MovetargetVarianceFields()

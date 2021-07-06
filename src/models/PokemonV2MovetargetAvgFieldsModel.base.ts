/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetAvgFieldsBase
 * auto generated base class for the model PokemonV2MovetargetAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovetargetAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_avg_fields"), "pokemon_v2_movetarget_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovetargetAvgFields() {
  return new PokemonV2MovetargetAvgFieldsModelSelector()
}

export const pokemonV2MovetargetAvgFieldsModelPrimitives = selectFromPokemonV2MovetargetAvgFields()

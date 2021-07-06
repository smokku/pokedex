/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MovetargetStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovetargetStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_stddev_pop_fields"), "pokemon_v2_movetarget_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovetargetStddevPopFields() {
  return new PokemonV2MovetargetStddevPopFieldsModelSelector()
}

export const pokemonV2MovetargetStddevPopFieldsModelPrimitives = selectFromPokemonV2MovetargetStddevPopFields()

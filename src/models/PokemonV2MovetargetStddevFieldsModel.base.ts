/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetStddevFieldsBase
 * auto generated base class for the model PokemonV2MovetargetStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovetargetStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_stddev_fields"), "pokemon_v2_movetarget_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovetargetStddevFields() {
  return new PokemonV2MovetargetStddevFieldsModelSelector()
}

export const pokemonV2MovetargetStddevFieldsModelPrimitives = selectFromPokemonV2MovetargetStddevFields()

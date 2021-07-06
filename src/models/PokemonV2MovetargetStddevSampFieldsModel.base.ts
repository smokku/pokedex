/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovetargetStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovetargetStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_stddev_samp_fields"), "pokemon_v2_movetarget_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovetargetStddevSampFields() {
  return new PokemonV2MovetargetStddevSampFieldsModelSelector()
}

export const pokemonV2MovetargetStddevSampFieldsModelPrimitives = selectFromPokemonV2MovetargetStddevSampFields()

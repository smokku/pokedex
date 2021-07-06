/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategoryStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategoryStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetacategoryStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategoryStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategory_stddev_samp_fields"), "pokemon_v2_movemetacategory_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategoryStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetacategoryStddevSampFields() {
  return new PokemonV2MovemetacategoryStddevSampFieldsModelSelector()
}

export const pokemonV2MovemetacategoryStddevSampFieldsModelPrimitives = selectFromPokemonV2MovemetacategoryStddevSampFields()

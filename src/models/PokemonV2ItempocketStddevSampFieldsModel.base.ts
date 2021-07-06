/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItempocketStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItempocketStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_stddev_samp_fields"), "pokemon_v2_itempocket_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItempocketStddevSampFields() {
  return new PokemonV2ItempocketStddevSampFieldsModelSelector()
}

export const pokemonV2ItempocketStddevSampFieldsModelPrimitives = selectFromPokemonV2ItempocketStddevSampFields()

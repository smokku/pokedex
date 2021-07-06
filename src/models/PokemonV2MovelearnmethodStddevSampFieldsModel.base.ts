/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovelearnmethodStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethod_stddev_samp_fields"), "pokemon_v2_movelearnmethod_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovelearnmethodStddevSampFields() {
  return new PokemonV2MovelearnmethodStddevSampFieldsModelSelector()
}

export const pokemonV2MovelearnmethodStddevSampFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodStddevSampFields()

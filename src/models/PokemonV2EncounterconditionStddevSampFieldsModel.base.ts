/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterconditionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_stddev_samp_fields"), "pokemon_v2_encountercondition_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionStddevSampFields() {
  return new PokemonV2EncounterconditionStddevSampFieldsModelSelector()
}

export const pokemonV2EncounterconditionStddevSampFieldsModelPrimitives = selectFromPokemonV2EncounterconditionStddevSampFields()

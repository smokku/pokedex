/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationStddevSampFieldsBase
 * auto generated base class for the model PokemonV2LocationStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_stddev_samp_fields"), "pokemon_v2_location_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2LocationStddevSampFields() {
  return new PokemonV2LocationStddevSampFieldsModelSelector()
}

export const pokemonV2LocationStddevSampFieldsModelPrimitives = selectFromPokemonV2LocationStddevSampFields().region_id

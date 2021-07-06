/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorStddevSampFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2BerryflavorStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_stddev_samp_fields"), "pokemon_v2_berryflavor_stddev_samp_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorStddevSampFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryflavorStddevSampFields() {
  return new PokemonV2BerryflavorStddevSampFieldsModelSelector()
}

export const pokemonV2BerryflavorStddevSampFieldsModelPrimitives = selectFromPokemonV2BerryflavorStddevSampFields().contest_type_id

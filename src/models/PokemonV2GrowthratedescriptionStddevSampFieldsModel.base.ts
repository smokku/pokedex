/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GrowthratedescriptionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2GrowthratedescriptionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription_stddev_samp_fields"), "pokemon_v2_growthratedescription_stddev_samp_fields"),
    growth_rate_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2GrowthratedescriptionStddevSampFields() {
  return new PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector()
}

export const pokemonV2GrowthratedescriptionStddevSampFieldsModelPrimitives = selectFromPokemonV2GrowthratedescriptionStddevSampFields().growth_rate_id.language_id

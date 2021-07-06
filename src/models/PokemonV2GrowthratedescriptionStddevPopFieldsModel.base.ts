/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionStddevPopFieldsBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2GrowthratedescriptionStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2GrowthratedescriptionStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription_stddev_pop_fields"), "pokemon_v2_growthratedescription_stddev_pop_fields"),
    growth_rate_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2GrowthratedescriptionStddevPopFields() {
  return new PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector()
}

export const pokemonV2GrowthratedescriptionStddevPopFieldsModelPrimitives = selectFromPokemonV2GrowthratedescriptionStddevPopFields().growth_rate_id.language_id

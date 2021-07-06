/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionAvgFieldsBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2GrowthratedescriptionAvgFieldsModelBase = ModelBase
  .named('PokemonV2GrowthratedescriptionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription_avg_fields"), "pokemon_v2_growthratedescription_avg_fields"),
    growth_rate_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionAvgFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2GrowthratedescriptionAvgFields() {
  return new PokemonV2GrowthratedescriptionAvgFieldsModelSelector()
}

export const pokemonV2GrowthratedescriptionAvgFieldsModelPrimitives = selectFromPokemonV2GrowthratedescriptionAvgFields().growth_rate_id.language_id

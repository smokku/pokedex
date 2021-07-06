/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2GrowthratedescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2GrowthratedescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription_sum_fields"), "pokemon_v2_growthratedescription_sum_fields"),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionSumFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2GrowthratedescriptionSumFields() {
  return new PokemonV2GrowthratedescriptionSumFieldsModelSelector()
}

export const pokemonV2GrowthratedescriptionSumFieldsModelPrimitives = selectFromPokemonV2GrowthratedescriptionSumFields().growth_rate_id.language_id

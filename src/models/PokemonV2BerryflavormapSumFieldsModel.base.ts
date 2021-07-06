/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapSumFieldsBase
 * auto generated base class for the model PokemonV2BerryflavormapSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryflavormapSumFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavormapSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap_sum_fields"), "pokemon_v2_berryflavormap_sum_fields"),
    berry_flavor_id: types.union(types.undefined, types.null, types.integer),
    berry_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    potency: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavormapSumFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get berry_id() { return this.__attr(`berry_id`) }
  get id() { return this.__attr(`id`) }
  get potency() { return this.__attr(`potency`) }
}
export function selectFromPokemonV2BerryflavormapSumFields() {
  return new PokemonV2BerryflavormapSumFieldsModelSelector()
}

export const pokemonV2BerryflavormapSumFieldsModelPrimitives = selectFromPokemonV2BerryflavormapSumFields().berry_flavor_id.berry_id.potency

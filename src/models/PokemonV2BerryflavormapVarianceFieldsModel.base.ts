/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapVarianceFieldsBase
 * auto generated base class for the model PokemonV2BerryflavormapVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryflavormapVarianceFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavormapVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap_variance_fields"), "pokemon_v2_berryflavormap_variance_fields"),
    berry_flavor_id: types.union(types.undefined, types.null, types.number),
    berry_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    potency: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavormapVarianceFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get berry_id() { return this.__attr(`berry_id`) }
  get id() { return this.__attr(`id`) }
  get potency() { return this.__attr(`potency`) }
}
export function selectFromPokemonV2BerryflavormapVarianceFields() {
  return new PokemonV2BerryflavormapVarianceFieldsModelSelector()
}

export const pokemonV2BerryflavormapVarianceFieldsModelPrimitives = selectFromPokemonV2BerryflavormapVarianceFields().berry_flavor_id.berry_id.potency

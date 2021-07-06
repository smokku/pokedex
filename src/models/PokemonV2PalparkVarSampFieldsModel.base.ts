/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkVarSampFieldsBase
 * auto generated base class for the model PokemonV2PalparkVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PalparkVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PalparkVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark_var_samp_fields"), "pokemon_v2_palpark_var_samp_fields"),
    base_score: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pal_park_area_id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
    rate: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkVarSampFieldsModelSelector extends QueryBuilder {
  get base_score() { return this.__attr(`base_score`) }
  get id() { return this.__attr(`id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get rate() { return this.__attr(`rate`) }
}
export function selectFromPokemonV2PalparkVarSampFields() {
  return new PokemonV2PalparkVarSampFieldsModelSelector()
}

export const pokemonV2PalparkVarSampFieldsModelPrimitives = selectFromPokemonV2PalparkVarSampFields().base_score.pal_park_area_id.pokemon_species_id.rate

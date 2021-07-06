/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkAvgFieldsBase
 * auto generated base class for the model PokemonV2PalparkAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PalparkAvgFieldsModelBase = ModelBase
  .named('PokemonV2PalparkAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark_avg_fields"), "pokemon_v2_palpark_avg_fields"),
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

export class PokemonV2PalparkAvgFieldsModelSelector extends QueryBuilder {
  get base_score() { return this.__attr(`base_score`) }
  get id() { return this.__attr(`id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get rate() { return this.__attr(`rate`) }
}
export function selectFromPokemonV2PalparkAvgFields() {
  return new PokemonV2PalparkAvgFieldsModelSelector()
}

export const pokemonV2PalparkAvgFieldsModelPrimitives = selectFromPokemonV2PalparkAvgFields().base_score.pal_park_area_id.pokemon_species_id.rate

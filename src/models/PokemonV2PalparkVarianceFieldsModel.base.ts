/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkVarianceFieldsBase
 * auto generated base class for the model PokemonV2PalparkVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PalparkVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PalparkVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark_variance_fields"), "pokemon_v2_palpark_variance_fields"),
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

export class PokemonV2PalparkVarianceFieldsModelSelector extends QueryBuilder {
  get base_score() { return this.__attr(`base_score`) }
  get id() { return this.__attr(`id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get rate() { return this.__attr(`rate`) }
}
export function selectFromPokemonV2PalparkVarianceFields() {
  return new PokemonV2PalparkVarianceFieldsModelSelector()
}

export const pokemonV2PalparkVarianceFieldsModelPrimitives = selectFromPokemonV2PalparkVarianceFields().base_score.pal_park_area_id.pokemon_species_id.rate

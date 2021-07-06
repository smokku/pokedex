/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkMaxFieldsBase
 * auto generated base class for the model PokemonV2PalparkMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PalparkMaxFieldsModelBase = ModelBase
  .named('PokemonV2PalparkMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark_max_fields"), "pokemon_v2_palpark_max_fields"),
    base_score: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pal_park_area_id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    rate: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkMaxFieldsModelSelector extends QueryBuilder {
  get base_score() { return this.__attr(`base_score`) }
  get id() { return this.__attr(`id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get rate() { return this.__attr(`rate`) }
}
export function selectFromPokemonV2PalparkMaxFields() {
  return new PokemonV2PalparkMaxFieldsModelSelector()
}

export const pokemonV2PalparkMaxFieldsModelPrimitives = selectFromPokemonV2PalparkMaxFields().base_score.pal_park_area_id.pokemon_species_id.rate

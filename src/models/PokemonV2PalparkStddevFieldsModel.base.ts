/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkStddevFieldsBase
 * auto generated base class for the model PokemonV2PalparkStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PalparkStddevFieldsModelBase = ModelBase
  .named('PokemonV2PalparkStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark_stddev_fields"), "pokemon_v2_palpark_stddev_fields"),
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

export class PokemonV2PalparkStddevFieldsModelSelector extends QueryBuilder {
  get base_score() { return this.__attr(`base_score`) }
  get id() { return this.__attr(`id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get rate() { return this.__attr(`rate`) }
}
export function selectFromPokemonV2PalparkStddevFields() {
  return new PokemonV2PalparkStddevFieldsModelSelector()
}

export const pokemonV2PalparkStddevFieldsModelPrimitives = selectFromPokemonV2PalparkStddevFields().base_score.pal_park_area_id.pokemon_species_id.rate

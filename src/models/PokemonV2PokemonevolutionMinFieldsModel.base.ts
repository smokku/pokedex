/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonevolutionMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonevolutionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonevolutionMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonevolutionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonevolution_min_fields"), "pokemon_v2_pokemonevolution_min_fields"),
    evolution_item_id: types.union(types.undefined, types.null, types.integer),
    evolution_trigger_id: types.union(types.undefined, types.null, types.integer),
    evolved_species_id: types.union(types.undefined, types.null, types.integer),
    gender_id: types.union(types.undefined, types.null, types.integer),
    held_item_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    known_move_id: types.union(types.undefined, types.null, types.integer),
    known_move_type_id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
    min_affection: types.union(types.undefined, types.null, types.integer),
    min_beauty: types.union(types.undefined, types.null, types.integer),
    min_happiness: types.union(types.undefined, types.null, types.integer),
    min_level: types.union(types.undefined, types.null, types.integer),
    party_species_id: types.union(types.undefined, types.null, types.integer),
    party_type_id: types.union(types.undefined, types.null, types.integer),
    relative_physical_stats: types.union(types.undefined, types.null, types.integer),
    time_of_day: types.union(types.undefined, types.null, types.string),
    trade_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonevolutionMinFieldsModelSelector extends QueryBuilder {
  get evolution_item_id() { return this.__attr(`evolution_item_id`) }
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get evolved_species_id() { return this.__attr(`evolved_species_id`) }
  get gender_id() { return this.__attr(`gender_id`) }
  get held_item_id() { return this.__attr(`held_item_id`) }
  get id() { return this.__attr(`id`) }
  get known_move_id() { return this.__attr(`known_move_id`) }
  get known_move_type_id() { return this.__attr(`known_move_type_id`) }
  get location_id() { return this.__attr(`location_id`) }
  get min_affection() { return this.__attr(`min_affection`) }
  get min_beauty() { return this.__attr(`min_beauty`) }
  get min_happiness() { return this.__attr(`min_happiness`) }
  get min_level() { return this.__attr(`min_level`) }
  get party_species_id() { return this.__attr(`party_species_id`) }
  get party_type_id() { return this.__attr(`party_type_id`) }
  get relative_physical_stats() { return this.__attr(`relative_physical_stats`) }
  get time_of_day() { return this.__attr(`time_of_day`) }
  get trade_species_id() { return this.__attr(`trade_species_id`) }
}
export function selectFromPokemonV2PokemonevolutionMinFields() {
  return new PokemonV2PokemonevolutionMinFieldsModelSelector()
}

export const pokemonV2PokemonevolutionMinFieldsModelPrimitives = selectFromPokemonV2PokemonevolutionMinFields().evolution_item_id.evolution_trigger_id.evolved_species_id.gender_id.held_item_id.known_move_id.known_move_type_id.location_id.min_affection.min_beauty.min_happiness.min_level.party_species_id.party_type_id.relative_physical_stats.time_of_day.trade_species_id

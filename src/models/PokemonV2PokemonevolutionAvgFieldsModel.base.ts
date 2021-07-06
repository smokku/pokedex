/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonevolutionAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonevolutionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonevolutionAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonevolutionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonevolution_avg_fields"), "pokemon_v2_pokemonevolution_avg_fields"),
    evolution_item_id: types.union(types.undefined, types.null, types.number),
    evolution_trigger_id: types.union(types.undefined, types.null, types.number),
    evolved_species_id: types.union(types.undefined, types.null, types.number),
    gender_id: types.union(types.undefined, types.null, types.number),
    held_item_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    known_move_id: types.union(types.undefined, types.null, types.number),
    known_move_type_id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
    min_affection: types.union(types.undefined, types.null, types.number),
    min_beauty: types.union(types.undefined, types.null, types.number),
    min_happiness: types.union(types.undefined, types.null, types.number),
    min_level: types.union(types.undefined, types.null, types.number),
    party_species_id: types.union(types.undefined, types.null, types.number),
    party_type_id: types.union(types.undefined, types.null, types.number),
    relative_physical_stats: types.union(types.undefined, types.null, types.number),
    trade_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonevolutionAvgFieldsModelSelector extends QueryBuilder {
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
  get trade_species_id() { return this.__attr(`trade_species_id`) }
}
export function selectFromPokemonV2PokemonevolutionAvgFields() {
  return new PokemonV2PokemonevolutionAvgFieldsModelSelector()
}

export const pokemonV2PokemonevolutionAvgFieldsModelPrimitives = selectFromPokemonV2PokemonevolutionAvgFields().evolution_item_id.evolution_trigger_id.evolved_species_id.gender_id.held_item_id.known_move_id.known_move_type_id.location_id.min_affection.min_beauty.min_happiness.min_level.party_species_id.party_type_id.relative_physical_stats.trade_species_id

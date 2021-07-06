/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutiontriggerModel, PokemonV2EvolutiontriggerModelType } from "./PokemonV2EvolutiontriggerModel"
import { PokemonV2EvolutiontriggerModelSelector } from "./PokemonV2EvolutiontriggerModel.base"
import { PokemonV2GenderModel, PokemonV2GenderModelType } from "./PokemonV2GenderModel"
import { PokemonV2GenderModelSelector } from "./PokemonV2GenderModel.base"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { PokemonV2LocationModel, PokemonV2LocationModelType } from "./PokemonV2LocationModel"
import { PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonevolutionBase
 * auto generated base class for the model PokemonV2PokemonevolutionModel.
 *
 * columns and relationships of "pokemon_v2_pokemonevolution"
 */
export const PokemonV2PokemonevolutionModelBase = ModelBase
  .named('PokemonV2Pokemonevolution')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonevolution"), "pokemon_v2_pokemonevolution"),
    evolution_item_id: types.union(types.undefined, types.null, types.integer),
    evolution_trigger_id: types.union(types.undefined, types.null, types.integer),
    evolved_species_id: types.union(types.undefined, types.null, types.integer),
    gender_id: types.union(types.undefined, types.null, types.integer),
    held_item_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    known_move_id: types.union(types.undefined, types.null, types.integer),
    known_move_type_id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
    min_affection: types.union(types.undefined, types.null, types.integer),
    min_beauty: types.union(types.undefined, types.null, types.integer),
    min_happiness: types.union(types.undefined, types.null, types.integer),
    min_level: types.union(types.undefined, types.null, types.integer),
    needs_overworld_rain: types.union(types.undefined, types.boolean),
    party_species_id: types.union(types.undefined, types.null, types.integer),
    party_type_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemonV2ItemByHeldItemId: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    /** An object relationship */
    pokemonV2PokemonspecyByPartySpeciesId: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    /** An object relationship */
    pokemonV2PokemonspecyByTradeSpeciesId: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    /** An object relationship */
    pokemonV2TypeByPartyTypeId: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    /** An object relationship */
    pokemon_v2_evolutiontrigger: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerModel)),
    /** An object relationship */
    pokemon_v2_gender: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderModel)),
    /** An object relationship */
    pokemon_v2_item: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    /** An object relationship */
    pokemon_v2_location: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationModel)),
    /** An object relationship */
    pokemon_v2_move: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    /** An object relationship */
    pokemon_v2_type: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    relative_physical_stats: types.union(types.undefined, types.null, types.integer),
    time_of_day: types.union(types.undefined, types.null, types.string),
    trade_species_id: types.union(types.undefined, types.null, types.integer),
    turn_upside_down: types.union(types.undefined, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonevolutionModelSelector extends QueryBuilder {
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
  get needs_overworld_rain() { return this.__attr(`needs_overworld_rain`) }
  get party_species_id() { return this.__attr(`party_species_id`) }
  get party_type_id() { return this.__attr(`party_type_id`) }
  get relative_physical_stats() { return this.__attr(`relative_physical_stats`) }
  get time_of_day() { return this.__attr(`time_of_day`) }
  get trade_species_id() { return this.__attr(`trade_species_id`) }
  get turn_upside_down() { return this.__attr(`turn_upside_down`) }
  pokemonV2ItemByHeldItemId(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemonV2ItemByHeldItemId`, PokemonV2ItemModelSelector, builder) }
  pokemonV2PokemonspecyByPartySpeciesId(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemonV2PokemonspecyByPartySpeciesId`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemonV2PokemonspecyByTradeSpeciesId(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemonV2PokemonspecyByTradeSpeciesId`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemonV2TypeByPartyTypeId(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemonV2TypeByPartyTypeId`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_evolutiontrigger(builder?: string | PokemonV2EvolutiontriggerModelSelector | ((selector: PokemonV2EvolutiontriggerModelSelector) => PokemonV2EvolutiontriggerModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger`, PokemonV2EvolutiontriggerModelSelector, builder) }
  pokemon_v2_gender(builder?: string | PokemonV2GenderModelSelector | ((selector: PokemonV2GenderModelSelector) => PokemonV2GenderModelSelector)) { return this.__child(`pokemon_v2_gender`, PokemonV2GenderModelSelector, builder) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_location(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location`, PokemonV2LocationModelSelector, builder) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonevolution() {
  return new PokemonV2PokemonevolutionModelSelector()
}

export const pokemonV2PokemonevolutionModelPrimitives = selectFromPokemonV2Pokemonevolution().evolution_item_id.evolution_trigger_id.evolved_species_id.gender_id.held_item_id.known_move_id.known_move_type_id.location_id.min_affection.min_beauty.min_happiness.min_level.needs_overworld_rain.party_species_id.party_type_id.relative_physical_stats.time_of_day.trade_species_id.turn_upside_down

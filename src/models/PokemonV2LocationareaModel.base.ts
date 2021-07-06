/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterAggregateModel, PokemonV2EncounterAggregateModelType } from "./PokemonV2EncounterAggregateModel"
import { PokemonV2EncounterAggregateModelSelector } from "./PokemonV2EncounterAggregateModel.base"
import { PokemonV2EncounterModel, PokemonV2EncounterModelType } from "./PokemonV2EncounterModel"
import { PokemonV2EncounterModelSelector } from "./PokemonV2EncounterModel.base"
import { PokemonV2LocationModel, PokemonV2LocationModelType } from "./PokemonV2LocationModel"
import { PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"
import { PokemonV2LocationareaencounterrateAggregateModel, PokemonV2LocationareaencounterrateAggregateModelType } from "./PokemonV2LocationareaencounterrateAggregateModel"
import { PokemonV2LocationareaencounterrateAggregateModelSelector } from "./PokemonV2LocationareaencounterrateAggregateModel.base"
import { PokemonV2LocationareaencounterrateModel, PokemonV2LocationareaencounterrateModelType } from "./PokemonV2LocationareaencounterrateModel"
import { PokemonV2LocationareaencounterrateModelSelector } from "./PokemonV2LocationareaencounterrateModel.base"
import { PokemonV2LocationareanameAggregateModel, PokemonV2LocationareanameAggregateModelType } from "./PokemonV2LocationareanameAggregateModel"
import { PokemonV2LocationareanameAggregateModelSelector } from "./PokemonV2LocationareanameAggregateModel.base"
import { PokemonV2LocationareanameModel, PokemonV2LocationareanameModelType } from "./PokemonV2LocationareanameModel"
import { PokemonV2LocationareanameModelSelector } from "./PokemonV2LocationareanameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaBase
 * auto generated base class for the model PokemonV2LocationareaModel.
 *
 * columns and relationships of "pokemon_v2_locationarea"
 */
export const PokemonV2LocationareaModelBase = ModelBase
  .named('PokemonV2Locationarea')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea"), "pokemon_v2_locationarea"),
    game_index: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_encounters: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterModel))),
    /** An aggregate relationship */
    pokemon_v2_encounters_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterAggregateModel)),
    /** An object relationship */
    pokemon_v2_location: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationModel)),
    /** An array relationship */
    pokemon_v2_locationareaencounterrates: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaencounterrateModel))),
    /** An aggregate relationship */
    pokemon_v2_locationareaencounterrates_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareaencounterrateAggregateModel)),
    /** An array relationship */
    pokemon_v2_locationareanames: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareanameModel))),
    /** An aggregate relationship */
    pokemon_v2_locationareanames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareanameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_encounters(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounters`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encounters_aggregate(builder?: string | PokemonV2EncounterAggregateModelSelector | ((selector: PokemonV2EncounterAggregateModelSelector) => PokemonV2EncounterAggregateModelSelector)) { return this.__child(`pokemon_v2_encounters_aggregate`, PokemonV2EncounterAggregateModelSelector, builder) }
  pokemon_v2_location(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location`, PokemonV2LocationModelSelector, builder) }
  pokemon_v2_locationareaencounterrates(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrates`, PokemonV2LocationareaencounterrateModelSelector, builder) }
  pokemon_v2_locationareaencounterrates_aggregate(builder?: string | PokemonV2LocationareaencounterrateAggregateModelSelector | ((selector: PokemonV2LocationareaencounterrateAggregateModelSelector) => PokemonV2LocationareaencounterrateAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrates_aggregate`, PokemonV2LocationareaencounterrateAggregateModelSelector, builder) }
  pokemon_v2_locationareanames(builder?: string | PokemonV2LocationareanameModelSelector | ((selector: PokemonV2LocationareanameModelSelector) => PokemonV2LocationareanameModelSelector)) { return this.__child(`pokemon_v2_locationareanames`, PokemonV2LocationareanameModelSelector, builder) }
  pokemon_v2_locationareanames_aggregate(builder?: string | PokemonV2LocationareanameAggregateModelSelector | ((selector: PokemonV2LocationareanameAggregateModelSelector) => PokemonV2LocationareanameAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareanames_aggregate`, PokemonV2LocationareanameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Locationarea() {
  return new PokemonV2LocationareaModelSelector()
}

export const pokemonV2LocationareaModelPrimitives = selectFromPokemonV2Locationarea().game_index.location_id.name

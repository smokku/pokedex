/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncountermethodnameAggregateModel, PokemonV2EncountermethodnameAggregateModelType } from "./PokemonV2EncountermethodnameAggregateModel"
import { PokemonV2EncountermethodnameAggregateModelSelector } from "./PokemonV2EncountermethodnameAggregateModel.base"
import { PokemonV2EncountermethodnameModel, PokemonV2EncountermethodnameModelType } from "./PokemonV2EncountermethodnameModel"
import { PokemonV2EncountermethodnameModelSelector } from "./PokemonV2EncountermethodnameModel.base"
import { PokemonV2EncounterslotAggregateModel, PokemonV2EncounterslotAggregateModelType } from "./PokemonV2EncounterslotAggregateModel"
import { PokemonV2EncounterslotAggregateModelSelector } from "./PokemonV2EncounterslotAggregateModel.base"
import { PokemonV2EncounterslotModel, PokemonV2EncounterslotModelType } from "./PokemonV2EncounterslotModel"
import { PokemonV2EncounterslotModelSelector } from "./PokemonV2EncounterslotModel.base"
import { PokemonV2LocationareaencounterrateAggregateModel, PokemonV2LocationareaencounterrateAggregateModelType } from "./PokemonV2LocationareaencounterrateAggregateModel"
import { PokemonV2LocationareaencounterrateAggregateModelSelector } from "./PokemonV2LocationareaencounterrateAggregateModel.base"
import { PokemonV2LocationareaencounterrateModel, PokemonV2LocationareaencounterrateModelType } from "./PokemonV2LocationareaencounterrateModel"
import { PokemonV2LocationareaencounterrateModelSelector } from "./PokemonV2LocationareaencounterrateModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodBase
 * auto generated base class for the model PokemonV2EncountermethodModel.
 *
 * columns and relationships of "pokemon_v2_encountermethod"
 */
export const PokemonV2EncountermethodModelBase = ModelBase
  .named('PokemonV2Encountermethod')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod"), "pokemon_v2_encountermethod"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    order: types.union(types.undefined, types.null, types.integer),
    /** An array relationship */
    pokemon_v2_encountermethodnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncountermethodnameModel))),
    /** An aggregate relationship */
    pokemon_v2_encountermethodnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncountermethodnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_encounterslots: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterslotModel))),
    /** An aggregate relationship */
    pokemon_v2_encounterslots_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterslotAggregateModel)),
    /** An array relationship */
    pokemon_v2_locationareaencounterrates: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaencounterrateModel))),
    /** An aggregate relationship */
    pokemon_v2_locationareaencounterrates_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareaencounterrateAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
  pokemon_v2_encountermethodnames(builder?: string | PokemonV2EncountermethodnameModelSelector | ((selector: PokemonV2EncountermethodnameModelSelector) => PokemonV2EncountermethodnameModelSelector)) { return this.__child(`pokemon_v2_encountermethodnames`, PokemonV2EncountermethodnameModelSelector, builder) }
  pokemon_v2_encountermethodnames_aggregate(builder?: string | PokemonV2EncountermethodnameAggregateModelSelector | ((selector: PokemonV2EncountermethodnameAggregateModelSelector) => PokemonV2EncountermethodnameAggregateModelSelector)) { return this.__child(`pokemon_v2_encountermethodnames_aggregate`, PokemonV2EncountermethodnameAggregateModelSelector, builder) }
  pokemon_v2_encounterslots(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`pokemon_v2_encounterslots`, PokemonV2EncounterslotModelSelector, builder) }
  pokemon_v2_encounterslots_aggregate(builder?: string | PokemonV2EncounterslotAggregateModelSelector | ((selector: PokemonV2EncounterslotAggregateModelSelector) => PokemonV2EncounterslotAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterslots_aggregate`, PokemonV2EncounterslotAggregateModelSelector, builder) }
  pokemon_v2_locationareaencounterrates(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrates`, PokemonV2LocationareaencounterrateModelSelector, builder) }
  pokemon_v2_locationareaencounterrates_aggregate(builder?: string | PokemonV2LocationareaencounterrateAggregateModelSelector | ((selector: PokemonV2LocationareaencounterrateAggregateModelSelector) => PokemonV2LocationareaencounterrateAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrates_aggregate`, PokemonV2LocationareaencounterrateAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Encountermethod() {
  return new PokemonV2EncountermethodModelSelector()
}

export const pokemonV2EncountermethodModelPrimitives = selectFromPokemonV2Encountermethod().name.order

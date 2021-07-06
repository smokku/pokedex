/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitychangeAggregateModel, PokemonV2AbilitychangeAggregateModelType } from "./PokemonV2AbilitychangeAggregateModel"
import { PokemonV2AbilitychangeAggregateModelSelector } from "./PokemonV2AbilitychangeAggregateModel.base"
import { PokemonV2AbilitychangeModel, PokemonV2AbilitychangeModelType } from "./PokemonV2AbilitychangeModel"
import { PokemonV2AbilitychangeModelSelector } from "./PokemonV2AbilitychangeModel.base"
import { PokemonV2AbilityflavortextAggregateModel, PokemonV2AbilityflavortextAggregateModelType } from "./PokemonV2AbilityflavortextAggregateModel"
import { PokemonV2AbilityflavortextAggregateModelSelector } from "./PokemonV2AbilityflavortextAggregateModel.base"
import { PokemonV2AbilityflavortextModel, PokemonV2AbilityflavortextModelType } from "./PokemonV2AbilityflavortextModel"
import { PokemonV2AbilityflavortextModelSelector } from "./PokemonV2AbilityflavortextModel.base"
import { PokemonV2EncounterslotAggregateModel, PokemonV2EncounterslotAggregateModelType } from "./PokemonV2EncounterslotAggregateModel"
import { PokemonV2EncounterslotAggregateModelSelector } from "./PokemonV2EncounterslotAggregateModel.base"
import { PokemonV2EncounterslotModel, PokemonV2EncounterslotModelType } from "./PokemonV2EncounterslotModel"
import { PokemonV2EncounterslotModelSelector } from "./PokemonV2EncounterslotModel.base"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2ItemflavortextAggregateModel, PokemonV2ItemflavortextAggregateModelType } from "./PokemonV2ItemflavortextAggregateModel"
import { PokemonV2ItemflavortextAggregateModelSelector } from "./PokemonV2ItemflavortextAggregateModel.base"
import { PokemonV2ItemflavortextModel, PokemonV2ItemflavortextModelType } from "./PokemonV2ItemflavortextModel"
import { PokemonV2ItemflavortextModelSelector } from "./PokemonV2ItemflavortextModel.base"
import { PokemonV2MachineAggregateModel, PokemonV2MachineAggregateModelType } from "./PokemonV2MachineAggregateModel"
import { PokemonV2MachineAggregateModelSelector } from "./PokemonV2MachineAggregateModel.base"
import { PokemonV2MachineModel, PokemonV2MachineModelType } from "./PokemonV2MachineModel"
import { PokemonV2MachineModelSelector } from "./PokemonV2MachineModel.base"
import { PokemonV2MovechangeAggregateModel, PokemonV2MovechangeAggregateModelType } from "./PokemonV2MovechangeAggregateModel"
import { PokemonV2MovechangeAggregateModelSelector } from "./PokemonV2MovechangeAggregateModel.base"
import { PokemonV2MovechangeModel, PokemonV2MovechangeModelType } from "./PokemonV2MovechangeModel"
import { PokemonV2MovechangeModelSelector } from "./PokemonV2MovechangeModel.base"
import { PokemonV2MoveeffectchangeAggregateModel, PokemonV2MoveeffectchangeAggregateModelType } from "./PokemonV2MoveeffectchangeAggregateModel"
import { PokemonV2MoveeffectchangeAggregateModelSelector } from "./PokemonV2MoveeffectchangeAggregateModel.base"
import { PokemonV2MoveeffectchangeModel, PokemonV2MoveeffectchangeModelType } from "./PokemonV2MoveeffectchangeModel"
import { PokemonV2MoveeffectchangeModelSelector } from "./PokemonV2MoveeffectchangeModel.base"
import { PokemonV2MoveflavortextAggregateModel, PokemonV2MoveflavortextAggregateModelType } from "./PokemonV2MoveflavortextAggregateModel"
import { PokemonV2MoveflavortextAggregateModelSelector } from "./PokemonV2MoveflavortextAggregateModel.base"
import { PokemonV2MoveflavortextModel, PokemonV2MoveflavortextModelType } from "./PokemonV2MoveflavortextModel"
import { PokemonV2MoveflavortextModelSelector } from "./PokemonV2MoveflavortextModel.base"
import { PokemonV2PokedexversiongroupAggregateModel, PokemonV2PokedexversiongroupAggregateModelType } from "./PokemonV2PokedexversiongroupAggregateModel"
import { PokemonV2PokedexversiongroupAggregateModelSelector } from "./PokemonV2PokedexversiongroupAggregateModel.base"
import { PokemonV2PokedexversiongroupModel, PokemonV2PokedexversiongroupModelType } from "./PokemonV2PokedexversiongroupModel"
import { PokemonV2PokedexversiongroupModelSelector } from "./PokemonV2PokedexversiongroupModel.base"
import { PokemonV2PokemonformAggregateModel, PokemonV2PokemonformAggregateModelType } from "./PokemonV2PokemonformAggregateModel"
import { PokemonV2PokemonformAggregateModelSelector } from "./PokemonV2PokemonformAggregateModel.base"
import { PokemonV2PokemonformModel, PokemonV2PokemonformModelType } from "./PokemonV2PokemonformModel"
import { PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"
import { PokemonV2PokemonmoveAggregateModel, PokemonV2PokemonmoveAggregateModelType } from "./PokemonV2PokemonmoveAggregateModel"
import { PokemonV2PokemonmoveAggregateModelSelector } from "./PokemonV2PokemonmoveAggregateModel.base"
import { PokemonV2PokemonmoveModel, PokemonV2PokemonmoveModelType } from "./PokemonV2PokemonmoveModel"
import { PokemonV2PokemonmoveModelSelector } from "./PokemonV2PokemonmoveModel.base"
import { PokemonV2VersionAggregateModel, PokemonV2VersionAggregateModelType } from "./PokemonV2VersionAggregateModel"
import { PokemonV2VersionAggregateModelSelector } from "./PokemonV2VersionAggregateModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { PokemonV2VersiongroupmovelearnmethodAggregateModel, PokemonV2VersiongroupmovelearnmethodAggregateModelType } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel"
import { PokemonV2VersiongroupmovelearnmethodAggregateModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel.base"
import { PokemonV2VersiongroupmovelearnmethodModel, PokemonV2VersiongroupmovelearnmethodModelType } from "./PokemonV2VersiongroupmovelearnmethodModel"
import { PokemonV2VersiongroupmovelearnmethodModelSelector } from "./PokemonV2VersiongroupmovelearnmethodModel.base"
import { PokemonV2VersiongroupregionAggregateModel, PokemonV2VersiongroupregionAggregateModelType } from "./PokemonV2VersiongroupregionAggregateModel"
import { PokemonV2VersiongroupregionAggregateModelSelector } from "./PokemonV2VersiongroupregionAggregateModel.base"
import { PokemonV2VersiongroupregionModel, PokemonV2VersiongroupregionModelType } from "./PokemonV2VersiongroupregionModel"
import { PokemonV2VersiongroupregionModelSelector } from "./PokemonV2VersiongroupregionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupBase
 * auto generated base class for the model PokemonV2VersiongroupModel.
 *
 * columns and relationships of "pokemon_v2_versiongroup"
 */
export const PokemonV2VersiongroupModelBase = ModelBase
  .named('PokemonV2Versiongroup')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup"), "pokemon_v2_versiongroup"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    order: types.union(types.undefined, types.null, types.integer),
    /** An array relationship */
    pokemon_v2_abilitychanges: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitychangeModel))),
    /** An aggregate relationship */
    pokemon_v2_abilitychanges_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilitychangeAggregateModel)),
    /** An array relationship */
    pokemon_v2_abilityflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_abilityflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilityflavortextAggregateModel)),
    /** An array relationship */
    pokemon_v2_encounterslots: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterslotModel))),
    /** An aggregate relationship */
    pokemon_v2_encounterslots_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterslotAggregateModel)),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An array relationship */
    pokemon_v2_itemflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_itemflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemflavortextAggregateModel)),
    /** An array relationship */
    pokemon_v2_machines: types.union(types.undefined, types.array(types.late((): any => PokemonV2MachineModel))),
    /** An aggregate relationship */
    pokemon_v2_machines_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MachineAggregateModel)),
    /** An array relationship */
    pokemon_v2_movechanges: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovechangeModel))),
    /** An aggregate relationship */
    pokemon_v2_movechanges_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovechangeAggregateModel)),
    /** An array relationship */
    pokemon_v2_moveeffectchanges: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectchangeModel))),
    /** An aggregate relationship */
    pokemon_v2_moveeffectchanges_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffectchangeAggregateModel)),
    /** An array relationship */
    pokemon_v2_moveflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_moveflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveflavortextAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokedexversiongroups: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexversiongroupModel))),
    /** An aggregate relationship */
    pokemon_v2_pokedexversiongroups_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexversiongroupAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonforms: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonforms_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonmoves: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonmoveModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonmoves_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonmoveAggregateModel)),
    /** An array relationship */
    pokemon_v2_versiongroupmovelearnmethods: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupmovelearnmethodModel))),
    /** An aggregate relationship */
    pokemon_v2_versiongroupmovelearnmethods_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupmovelearnmethodAggregateModel)),
    /** An array relationship */
    pokemon_v2_versiongroupregions: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupregionModel))),
    /** An aggregate relationship */
    pokemon_v2_versiongroupregions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupregionAggregateModel)),
    /** An array relationship */
    pokemon_v2_versions: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersionModel))),
    /** An aggregate relationship */
    pokemon_v2_versions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersionAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
  pokemon_v2_abilitychanges(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`pokemon_v2_abilitychanges`, PokemonV2AbilitychangeModelSelector, builder) }
  pokemon_v2_abilitychanges_aggregate(builder?: string | PokemonV2AbilitychangeAggregateModelSelector | ((selector: PokemonV2AbilitychangeAggregateModelSelector) => PokemonV2AbilitychangeAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitychanges_aggregate`, PokemonV2AbilitychangeAggregateModelSelector, builder) }
  pokemon_v2_abilityflavortexts(builder?: string | PokemonV2AbilityflavortextModelSelector | ((selector: PokemonV2AbilityflavortextModelSelector) => PokemonV2AbilityflavortextModelSelector)) { return this.__child(`pokemon_v2_abilityflavortexts`, PokemonV2AbilityflavortextModelSelector, builder) }
  pokemon_v2_abilityflavortexts_aggregate(builder?: string | PokemonV2AbilityflavortextAggregateModelSelector | ((selector: PokemonV2AbilityflavortextAggregateModelSelector) => PokemonV2AbilityflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityflavortexts_aggregate`, PokemonV2AbilityflavortextAggregateModelSelector, builder) }
  pokemon_v2_encounterslots(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`pokemon_v2_encounterslots`, PokemonV2EncounterslotModelSelector, builder) }
  pokemon_v2_encounterslots_aggregate(builder?: string | PokemonV2EncounterslotAggregateModelSelector | ((selector: PokemonV2EncounterslotAggregateModelSelector) => PokemonV2EncounterslotAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterslots_aggregate`, PokemonV2EncounterslotAggregateModelSelector, builder) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_itemflavortexts(builder?: string | PokemonV2ItemflavortextModelSelector | ((selector: PokemonV2ItemflavortextModelSelector) => PokemonV2ItemflavortextModelSelector)) { return this.__child(`pokemon_v2_itemflavortexts`, PokemonV2ItemflavortextModelSelector, builder) }
  pokemon_v2_itemflavortexts_aggregate(builder?: string | PokemonV2ItemflavortextAggregateModelSelector | ((selector: PokemonV2ItemflavortextAggregateModelSelector) => PokemonV2ItemflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_itemflavortexts_aggregate`, PokemonV2ItemflavortextAggregateModelSelector, builder) }
  pokemon_v2_machines(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`pokemon_v2_machines`, PokemonV2MachineModelSelector, builder) }
  pokemon_v2_machines_aggregate(builder?: string | PokemonV2MachineAggregateModelSelector | ((selector: PokemonV2MachineAggregateModelSelector) => PokemonV2MachineAggregateModelSelector)) { return this.__child(`pokemon_v2_machines_aggregate`, PokemonV2MachineAggregateModelSelector, builder) }
  pokemon_v2_movechanges(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`pokemon_v2_movechanges`, PokemonV2MovechangeModelSelector, builder) }
  pokemon_v2_movechanges_aggregate(builder?: string | PokemonV2MovechangeAggregateModelSelector | ((selector: PokemonV2MovechangeAggregateModelSelector) => PokemonV2MovechangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movechanges_aggregate`, PokemonV2MovechangeAggregateModelSelector, builder) }
  pokemon_v2_moveeffectchanges(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`pokemon_v2_moveeffectchanges`, PokemonV2MoveeffectchangeModelSelector, builder) }
  pokemon_v2_moveeffectchanges_aggregate(builder?: string | PokemonV2MoveeffectchangeAggregateModelSelector | ((selector: PokemonV2MoveeffectchangeAggregateModelSelector) => PokemonV2MoveeffectchangeAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffectchanges_aggregate`, PokemonV2MoveeffectchangeAggregateModelSelector, builder) }
  pokemon_v2_moveflavortexts(builder?: string | PokemonV2MoveflavortextModelSelector | ((selector: PokemonV2MoveflavortextModelSelector) => PokemonV2MoveflavortextModelSelector)) { return this.__child(`pokemon_v2_moveflavortexts`, PokemonV2MoveflavortextModelSelector, builder) }
  pokemon_v2_moveflavortexts_aggregate(builder?: string | PokemonV2MoveflavortextAggregateModelSelector | ((selector: PokemonV2MoveflavortextAggregateModelSelector) => PokemonV2MoveflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveflavortexts_aggregate`, PokemonV2MoveflavortextAggregateModelSelector, builder) }
  pokemon_v2_pokedexversiongroups(builder?: string | PokemonV2PokedexversiongroupModelSelector | ((selector: PokemonV2PokedexversiongroupModelSelector) => PokemonV2PokedexversiongroupModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroups`, PokemonV2PokedexversiongroupModelSelector, builder) }
  pokemon_v2_pokedexversiongroups_aggregate(builder?: string | PokemonV2PokedexversiongroupAggregateModelSelector | ((selector: PokemonV2PokedexversiongroupAggregateModelSelector) => PokemonV2PokedexversiongroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexversiongroups_aggregate`, PokemonV2PokedexversiongroupAggregateModelSelector, builder) }
  pokemon_v2_pokemonforms(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonforms`, PokemonV2PokemonformModelSelector, builder) }
  pokemon_v2_pokemonforms_aggregate(builder?: string | PokemonV2PokemonformAggregateModelSelector | ((selector: PokemonV2PokemonformAggregateModelSelector) => PokemonV2PokemonformAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonforms_aggregate`, PokemonV2PokemonformAggregateModelSelector, builder) }
  pokemon_v2_pokemonmoves(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`pokemon_v2_pokemonmoves`, PokemonV2PokemonmoveModelSelector, builder) }
  pokemon_v2_pokemonmoves_aggregate(builder?: string | PokemonV2PokemonmoveAggregateModelSelector | ((selector: PokemonV2PokemonmoveAggregateModelSelector) => PokemonV2PokemonmoveAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonmoves_aggregate`, PokemonV2PokemonmoveAggregateModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethods(builder?: string | PokemonV2VersiongroupmovelearnmethodModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodModelSelector) => PokemonV2VersiongroupmovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethods`, PokemonV2VersiongroupmovelearnmethodModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethods_aggregate(builder?: string | PokemonV2VersiongroupmovelearnmethodAggregateModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodAggregateModelSelector) => PokemonV2VersiongroupmovelearnmethodAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethods_aggregate`, PokemonV2VersiongroupmovelearnmethodAggregateModelSelector, builder) }
  pokemon_v2_versiongroupregions(builder?: string | PokemonV2VersiongroupregionModelSelector | ((selector: PokemonV2VersiongroupregionModelSelector) => PokemonV2VersiongroupregionModelSelector)) { return this.__child(`pokemon_v2_versiongroupregions`, PokemonV2VersiongroupregionModelSelector, builder) }
  pokemon_v2_versiongroupregions_aggregate(builder?: string | PokemonV2VersiongroupregionAggregateModelSelector | ((selector: PokemonV2VersiongroupregionAggregateModelSelector) => PokemonV2VersiongroupregionAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupregions_aggregate`, PokemonV2VersiongroupregionAggregateModelSelector, builder) }
  pokemon_v2_versions(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_versions`, PokemonV2VersionModelSelector, builder) }
  pokemon_v2_versions_aggregate(builder?: string | PokemonV2VersionAggregateModelSelector | ((selector: PokemonV2VersionAggregateModelSelector) => PokemonV2VersionAggregateModelSelector)) { return this.__child(`pokemon_v2_versions_aggregate`, PokemonV2VersionAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Versiongroup() {
  return new PokemonV2VersiongroupModelSelector()
}

export const pokemonV2VersiongroupModelPrimitives = selectFromPokemonV2Versiongroup().generation_id.name.order

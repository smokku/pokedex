/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ExperienceAggregateModel, PokemonV2ExperienceAggregateModelType } from "./PokemonV2ExperienceAggregateModel"
import { PokemonV2ExperienceAggregateModelSelector } from "./PokemonV2ExperienceAggregateModel.base"
import { PokemonV2ExperienceModel, PokemonV2ExperienceModelType } from "./PokemonV2ExperienceModel"
import { PokemonV2ExperienceModelSelector } from "./PokemonV2ExperienceModel.base"
import { PokemonV2GrowthratedescriptionAggregateModel, PokemonV2GrowthratedescriptionAggregateModelType } from "./PokemonV2GrowthratedescriptionAggregateModel"
import { PokemonV2GrowthratedescriptionAggregateModelSelector } from "./PokemonV2GrowthratedescriptionAggregateModel.base"
import { PokemonV2GrowthratedescriptionModel, PokemonV2GrowthratedescriptionModelType } from "./PokemonV2GrowthratedescriptionModel"
import { PokemonV2GrowthratedescriptionModelSelector } from "./PokemonV2GrowthratedescriptionModel.base"
import { PokemonV2MachineAggregateModel, PokemonV2MachineAggregateModelType } from "./PokemonV2MachineAggregateModel"
import { PokemonV2MachineAggregateModelSelector } from "./PokemonV2MachineAggregateModel.base"
import { PokemonV2MachineModel, PokemonV2MachineModelType } from "./PokemonV2MachineModel"
import { PokemonV2MachineModelSelector } from "./PokemonV2MachineModel.base"
import { PokemonV2PokemonspeciesAggregateModel, PokemonV2PokemonspeciesAggregateModelType } from "./PokemonV2PokemonspeciesAggregateModel"
import { PokemonV2PokemonspeciesAggregateModelSelector } from "./PokemonV2PokemonspeciesAggregateModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateBase
 * auto generated base class for the model PokemonV2GrowthrateModel.
 *
 * columns and relationships of "pokemon_v2_growthrate"
 */
export const PokemonV2GrowthrateModelBase = ModelBase
  .named('PokemonV2Growthrate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate"), "pokemon_v2_growthrate"),
    formula: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_experiences: types.union(types.undefined, types.array(types.late((): any => PokemonV2ExperienceModel))),
    /** An aggregate relationship */
    pokemon_v2_experiences_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ExperienceAggregateModel)),
    /** An array relationship */
    pokemon_v2_growthratedescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2GrowthratedescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_growthratedescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GrowthratedescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_machines: types.union(types.undefined, types.array(types.late((): any => PokemonV2MachineModel))),
    /** An aggregate relationship */
    pokemon_v2_machines_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MachineAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateModelSelector extends QueryBuilder {
  get formula() { return this.__attr(`formula`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_experiences(builder?: string | PokemonV2ExperienceModelSelector | ((selector: PokemonV2ExperienceModelSelector) => PokemonV2ExperienceModelSelector)) { return this.__child(`pokemon_v2_experiences`, PokemonV2ExperienceModelSelector, builder) }
  pokemon_v2_experiences_aggregate(builder?: string | PokemonV2ExperienceAggregateModelSelector | ((selector: PokemonV2ExperienceAggregateModelSelector) => PokemonV2ExperienceAggregateModelSelector)) { return this.__child(`pokemon_v2_experiences_aggregate`, PokemonV2ExperienceAggregateModelSelector, builder) }
  pokemon_v2_growthratedescriptions(builder?: string | PokemonV2GrowthratedescriptionModelSelector | ((selector: PokemonV2GrowthratedescriptionModelSelector) => PokemonV2GrowthratedescriptionModelSelector)) { return this.__child(`pokemon_v2_growthratedescriptions`, PokemonV2GrowthratedescriptionModelSelector, builder) }
  pokemon_v2_growthratedescriptions_aggregate(builder?: string | PokemonV2GrowthratedescriptionAggregateModelSelector | ((selector: PokemonV2GrowthratedescriptionAggregateModelSelector) => PokemonV2GrowthratedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_growthratedescriptions_aggregate`, PokemonV2GrowthratedescriptionAggregateModelSelector, builder) }
  pokemon_v2_machines(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`pokemon_v2_machines`, PokemonV2MachineModelSelector, builder) }
  pokemon_v2_machines_aggregate(builder?: string | PokemonV2MachineAggregateModelSelector | ((selector: PokemonV2MachineAggregateModelSelector) => PokemonV2MachineAggregateModelSelector)) { return this.__child(`pokemon_v2_machines_aggregate`, PokemonV2MachineAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Growthrate() {
  return new PokemonV2GrowthrateModelSelector()
}

export const pokemonV2GrowthrateModelPrimitives = selectFromPokemonV2Growthrate().formula.name

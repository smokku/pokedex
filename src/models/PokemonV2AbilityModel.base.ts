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
import { PokemonV2AbilityeffecttextAggregateModel, PokemonV2AbilityeffecttextAggregateModelType } from "./PokemonV2AbilityeffecttextAggregateModel"
import { PokemonV2AbilityeffecttextAggregateModelSelector } from "./PokemonV2AbilityeffecttextAggregateModel.base"
import { PokemonV2AbilityeffecttextModel, PokemonV2AbilityeffecttextModelType } from "./PokemonV2AbilityeffecttextModel"
import { PokemonV2AbilityeffecttextModelSelector } from "./PokemonV2AbilityeffecttextModel.base"
import { PokemonV2AbilityflavortextAggregateModel, PokemonV2AbilityflavortextAggregateModelType } from "./PokemonV2AbilityflavortextAggregateModel"
import { PokemonV2AbilityflavortextAggregateModelSelector } from "./PokemonV2AbilityflavortextAggregateModel.base"
import { PokemonV2AbilityflavortextModel, PokemonV2AbilityflavortextModelType } from "./PokemonV2AbilityflavortextModel"
import { PokemonV2AbilityflavortextModelSelector } from "./PokemonV2AbilityflavortextModel.base"
import { PokemonV2AbilitynameAggregateModel, PokemonV2AbilitynameAggregateModelType } from "./PokemonV2AbilitynameAggregateModel"
import { PokemonV2AbilitynameAggregateModelSelector } from "./PokemonV2AbilitynameAggregateModel.base"
import { PokemonV2AbilitynameModel, PokemonV2AbilitynameModelType } from "./PokemonV2AbilitynameModel"
import { PokemonV2AbilitynameModelSelector } from "./PokemonV2AbilitynameModel.base"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2PokemonabilityAggregateModel, PokemonV2PokemonabilityAggregateModelType } from "./PokemonV2PokemonabilityAggregateModel"
import { PokemonV2PokemonabilityAggregateModelSelector } from "./PokemonV2PokemonabilityAggregateModel.base"
import { PokemonV2PokemonabilityModel, PokemonV2PokemonabilityModelType } from "./PokemonV2PokemonabilityModel"
import { PokemonV2PokemonabilityModelSelector } from "./PokemonV2PokemonabilityModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityBase
 * auto generated base class for the model PokemonV2AbilityModel.
 *
 * columns and relationships of "pokemon_v2_ability"
 */
export const PokemonV2AbilityModelBase = ModelBase
  .named('PokemonV2Ability')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability"), "pokemon_v2_ability"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    is_main_series: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_abilitychanges: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitychangeModel))),
    /** An aggregate relationship */
    pokemon_v2_abilitychanges_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilitychangeAggregateModel)),
    /** An array relationship */
    pokemon_v2_abilityeffecttexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityeffecttextModel))),
    /** An aggregate relationship */
    pokemon_v2_abilityeffecttexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilityeffecttextAggregateModel)),
    /** An array relationship */
    pokemon_v2_abilityflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_abilityflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilityflavortextAggregateModel)),
    /** An array relationship */
    pokemon_v2_abilitynames: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitynameModel))),
    /** An aggregate relationship */
    pokemon_v2_abilitynames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilitynameAggregateModel)),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An array relationship */
    pokemon_v2_pokemonabilities: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonabilityModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonabilities_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonabilityAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get is_main_series() { return this.__attr(`is_main_series`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_abilitychanges(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`pokemon_v2_abilitychanges`, PokemonV2AbilitychangeModelSelector, builder) }
  pokemon_v2_abilitychanges_aggregate(builder?: string | PokemonV2AbilitychangeAggregateModelSelector | ((selector: PokemonV2AbilitychangeAggregateModelSelector) => PokemonV2AbilitychangeAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitychanges_aggregate`, PokemonV2AbilitychangeAggregateModelSelector, builder) }
  pokemon_v2_abilityeffecttexts(builder?: string | PokemonV2AbilityeffecttextModelSelector | ((selector: PokemonV2AbilityeffecttextModelSelector) => PokemonV2AbilityeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttexts`, PokemonV2AbilityeffecttextModelSelector, builder) }
  pokemon_v2_abilityeffecttexts_aggregate(builder?: string | PokemonV2AbilityeffecttextAggregateModelSelector | ((selector: PokemonV2AbilityeffecttextAggregateModelSelector) => PokemonV2AbilityeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityeffecttexts_aggregate`, PokemonV2AbilityeffecttextAggregateModelSelector, builder) }
  pokemon_v2_abilityflavortexts(builder?: string | PokemonV2AbilityflavortextModelSelector | ((selector: PokemonV2AbilityflavortextModelSelector) => PokemonV2AbilityflavortextModelSelector)) { return this.__child(`pokemon_v2_abilityflavortexts`, PokemonV2AbilityflavortextModelSelector, builder) }
  pokemon_v2_abilityflavortexts_aggregate(builder?: string | PokemonV2AbilityflavortextAggregateModelSelector | ((selector: PokemonV2AbilityflavortextAggregateModelSelector) => PokemonV2AbilityflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilityflavortexts_aggregate`, PokemonV2AbilityflavortextAggregateModelSelector, builder) }
  pokemon_v2_abilitynames(builder?: string | PokemonV2AbilitynameModelSelector | ((selector: PokemonV2AbilitynameModelSelector) => PokemonV2AbilitynameModelSelector)) { return this.__child(`pokemon_v2_abilitynames`, PokemonV2AbilitynameModelSelector, builder) }
  pokemon_v2_abilitynames_aggregate(builder?: string | PokemonV2AbilitynameAggregateModelSelector | ((selector: PokemonV2AbilitynameAggregateModelSelector) => PokemonV2AbilitynameAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitynames_aggregate`, PokemonV2AbilitynameAggregateModelSelector, builder) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_pokemonabilities(builder?: string | PokemonV2PokemonabilityModelSelector | ((selector: PokemonV2PokemonabilityModelSelector) => PokemonV2PokemonabilityModelSelector)) { return this.__child(`pokemon_v2_pokemonabilities`, PokemonV2PokemonabilityModelSelector, builder) }
  pokemon_v2_pokemonabilities_aggregate(builder?: string | PokemonV2PokemonabilityAggregateModelSelector | ((selector: PokemonV2PokemonabilityAggregateModelSelector) => PokemonV2PokemonabilityAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonabilities_aggregate`, PokemonV2PokemonabilityAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Ability() {
  return new PokemonV2AbilityModelSelector()
}

export const pokemonV2AbilityModelPrimitives = selectFromPokemonV2Ability().generation_id.is_main_series.name

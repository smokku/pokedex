/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GrowthrateModel, PokemonV2GrowthrateModelType } from "./PokemonV2GrowthrateModel"
import { PokemonV2GrowthrateModelSelector } from "./PokemonV2GrowthrateModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceBase
 * auto generated base class for the model PokemonV2ExperienceModel.
 *
 * columns and relationships of "pokemon_v2_experience"
 */
export const PokemonV2ExperienceModelBase = ModelBase
  .named('PokemonV2Experience')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience"), "pokemon_v2_experience"),
    experience: types.union(types.undefined, types.integer),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    level: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemon_v2_growthrate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ExperienceModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
  pokemon_v2_growthrate(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`pokemon_v2_growthrate`, PokemonV2GrowthrateModelSelector, builder) }
}
export function selectFromPokemonV2Experience() {
  return new PokemonV2ExperienceModelSelector()
}

export const pokemonV2ExperienceModelPrimitives = selectFromPokemonV2Experience().experience.growth_rate_id.level

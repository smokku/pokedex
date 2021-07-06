/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceMinFieldsBase
 * auto generated base class for the model PokemonV2ExperienceMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ExperienceMinFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_min_fields"), "pokemon_v2_experience_min_fields"),
    experience: types.union(types.undefined, types.null, types.integer),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    level: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ExperienceMinFieldsModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
}
export function selectFromPokemonV2ExperienceMinFields() {
  return new PokemonV2ExperienceMinFieldsModelSelector()
}

export const pokemonV2ExperienceMinFieldsModelPrimitives = selectFromPokemonV2ExperienceMinFields().experience.growth_rate_id.level

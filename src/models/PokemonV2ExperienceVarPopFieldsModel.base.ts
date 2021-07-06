/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceVarPopFieldsBase
 * auto generated base class for the model PokemonV2ExperienceVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ExperienceVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_var_pop_fields"), "pokemon_v2_experience_var_pop_fields"),
    experience: types.union(types.undefined, types.null, types.number),
    growth_rate_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    level: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ExperienceVarPopFieldsModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
}
export function selectFromPokemonV2ExperienceVarPopFields() {
  return new PokemonV2ExperienceVarPopFieldsModelSelector()
}

export const pokemonV2ExperienceVarPopFieldsModelPrimitives = selectFromPokemonV2ExperienceVarPopFields().experience.growth_rate_id.level

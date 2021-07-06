/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceAvgFieldsBase
 * auto generated base class for the model PokemonV2ExperienceAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ExperienceAvgFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_avg_fields"), "pokemon_v2_experience_avg_fields"),
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

export class PokemonV2ExperienceAvgFieldsModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
}
export function selectFromPokemonV2ExperienceAvgFields() {
  return new PokemonV2ExperienceAvgFieldsModelSelector()
}

export const pokemonV2ExperienceAvgFieldsModelPrimitives = selectFromPokemonV2ExperienceAvgFields().experience.growth_rate_id.level

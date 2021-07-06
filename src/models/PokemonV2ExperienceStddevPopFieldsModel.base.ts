/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ExperienceStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ExperienceStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_stddev_pop_fields"), "pokemon_v2_experience_stddev_pop_fields"),
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

export class PokemonV2ExperienceStddevPopFieldsModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
}
export function selectFromPokemonV2ExperienceStddevPopFields() {
  return new PokemonV2ExperienceStddevPopFieldsModelSelector()
}

export const pokemonV2ExperienceStddevPopFieldsModelPrimitives = selectFromPokemonV2ExperienceStddevPopFields().experience.growth_rate_id.level

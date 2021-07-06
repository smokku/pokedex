/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceVarianceFieldsBase
 * auto generated base class for the model PokemonV2ExperienceVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ExperienceVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_variance_fields"), "pokemon_v2_experience_variance_fields"),
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

export class PokemonV2ExperienceVarianceFieldsModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
}
export function selectFromPokemonV2ExperienceVarianceFields() {
  return new PokemonV2ExperienceVarianceFieldsModelSelector()
}

export const pokemonV2ExperienceVarianceFieldsModelPrimitives = selectFromPokemonV2ExperienceVarianceFields().experience.growth_rate_id.level

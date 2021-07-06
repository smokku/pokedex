/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceSumFieldsBase
 * auto generated base class for the model PokemonV2ExperienceSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ExperienceSumFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_sum_fields"), "pokemon_v2_experience_sum_fields"),
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

export class PokemonV2ExperienceSumFieldsModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
}
export function selectFromPokemonV2ExperienceSumFields() {
  return new PokemonV2ExperienceSumFieldsModelSelector()
}

export const pokemonV2ExperienceSumFieldsModelPrimitives = selectFromPokemonV2ExperienceSumFields().experience.growth_rate_id.level

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ExperienceStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ExperienceStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_stddev_samp_fields"), "pokemon_v2_experience_stddev_samp_fields"),
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

export class PokemonV2ExperienceStddevSampFieldsModelSelector extends QueryBuilder {
  get experience() { return this.__attr(`experience`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
}
export function selectFromPokemonV2ExperienceStddevSampFields() {
  return new PokemonV2ExperienceStddevSampFieldsModelSelector()
}

export const pokemonV2ExperienceStddevSampFieldsModelPrimitives = selectFromPokemonV2ExperienceStddevSampFields().experience.growth_rate_id.level

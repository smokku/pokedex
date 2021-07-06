/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeefficacyStddevPopFieldsBase
 * auto generated base class for the model PokemonV2TypeefficacyStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2TypeefficacyStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2TypeefficacyStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typeefficacy_stddev_pop_fields"), "pokemon_v2_typeefficacy_stddev_pop_fields"),
    damage_factor: types.union(types.undefined, types.null, types.number),
    damage_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    target_type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeefficacyStddevPopFieldsModelSelector extends QueryBuilder {
  get damage_factor() { return this.__attr(`damage_factor`) }
  get damage_type_id() { return this.__attr(`damage_type_id`) }
  get id() { return this.__attr(`id`) }
  get target_type_id() { return this.__attr(`target_type_id`) }
}
export function selectFromPokemonV2TypeefficacyStddevPopFields() {
  return new PokemonV2TypeefficacyStddevPopFieldsModelSelector()
}

export const pokemonV2TypeefficacyStddevPopFieldsModelPrimitives = selectFromPokemonV2TypeefficacyStddevPopFields().damage_factor.damage_type_id.target_type_id

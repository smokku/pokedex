/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeefficacyMaxFieldsBase
 * auto generated base class for the model PokemonV2TypeefficacyMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2TypeefficacyMaxFieldsModelBase = ModelBase
  .named('PokemonV2TypeefficacyMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typeefficacy_max_fields"), "pokemon_v2_typeefficacy_max_fields"),
    damage_factor: types.union(types.undefined, types.null, types.integer),
    damage_type_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    target_type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeefficacyMaxFieldsModelSelector extends QueryBuilder {
  get damage_factor() { return this.__attr(`damage_factor`) }
  get damage_type_id() { return this.__attr(`damage_type_id`) }
  get id() { return this.__attr(`id`) }
  get target_type_id() { return this.__attr(`target_type_id`) }
}
export function selectFromPokemonV2TypeefficacyMaxFields() {
  return new PokemonV2TypeefficacyMaxFieldsModelSelector()
}

export const pokemonV2TypeefficacyMaxFieldsModelPrimitives = selectFromPokemonV2TypeefficacyMaxFields().damage_factor.damage_type_id.target_type_id

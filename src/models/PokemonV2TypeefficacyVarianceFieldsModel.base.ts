/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeefficacyVarianceFieldsBase
 * auto generated base class for the model PokemonV2TypeefficacyVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2TypeefficacyVarianceFieldsModelBase = ModelBase
  .named('PokemonV2TypeefficacyVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typeefficacy_variance_fields"), "pokemon_v2_typeefficacy_variance_fields"),
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

export class PokemonV2TypeefficacyVarianceFieldsModelSelector extends QueryBuilder {
  get damage_factor() { return this.__attr(`damage_factor`) }
  get damage_type_id() { return this.__attr(`damage_type_id`) }
  get id() { return this.__attr(`id`) }
  get target_type_id() { return this.__attr(`target_type_id`) }
}
export function selectFromPokemonV2TypeefficacyVarianceFields() {
  return new PokemonV2TypeefficacyVarianceFieldsModelSelector()
}

export const pokemonV2TypeefficacyVarianceFieldsModelPrimitives = selectFromPokemonV2TypeefficacyVarianceFields().damage_factor.damage_type_id.target_type_id

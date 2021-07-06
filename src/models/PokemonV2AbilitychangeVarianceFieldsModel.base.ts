/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeVarianceFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilitychangeVarianceFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychange_variance_fields"), "pokemon_v2_abilitychange_variance_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeVarianceFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilitychangeVarianceFields() {
  return new PokemonV2AbilitychangeVarianceFieldsModelSelector()
}

export const pokemonV2AbilitychangeVarianceFieldsModelPrimitives = selectFromPokemonV2AbilitychangeVarianceFields().ability_id.version_group_id

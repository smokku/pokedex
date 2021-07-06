/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeMinFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2AbilitychangeMinFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychange_min_fields"), "pokemon_v2_abilitychange_min_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeMinFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilitychangeMinFields() {
  return new PokemonV2AbilitychangeMinFieldsModelSelector()
}

export const pokemonV2AbilitychangeMinFieldsModelPrimitives = selectFromPokemonV2AbilitychangeMinFields().ability_id.version_group_id

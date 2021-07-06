/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeMaxFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2AbilitychangeMaxFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychange_max_fields"), "pokemon_v2_abilitychange_max_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeMaxFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilitychangeMaxFields() {
  return new PokemonV2AbilitychangeMaxFieldsModelSelector()
}

export const pokemonV2AbilitychangeMaxFieldsModelPrimitives = selectFromPokemonV2AbilitychangeMaxFields().ability_id.version_group_id

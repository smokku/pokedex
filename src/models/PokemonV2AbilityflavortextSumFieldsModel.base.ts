/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityflavortextSumFieldsBase
 * auto generated base class for the model PokemonV2AbilityflavortextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilityflavortextSumFieldsModelBase = ModelBase
  .named('PokemonV2AbilityflavortextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityflavortext_sum_fields"), "pokemon_v2_abilityflavortext_sum_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityflavortextSumFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilityflavortextSumFields() {
  return new PokemonV2AbilityflavortextSumFieldsModelSelector()
}

export const pokemonV2AbilityflavortextSumFieldsModelPrimitives = selectFromPokemonV2AbilityflavortextSumFields().ability_id.language_id.version_group_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextSumFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilitychangeeffecttextSumFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeeffecttextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext_sum_fields"), "pokemon_v2_abilitychangeeffecttext_sum_fields"),
    ability_change_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextSumFieldsModelSelector extends QueryBuilder {
  get ability_change_id() { return this.__attr(`ability_change_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitychangeeffecttextSumFields() {
  return new PokemonV2AbilitychangeeffecttextSumFieldsModelSelector()
}

export const pokemonV2AbilitychangeeffecttextSumFieldsModelPrimitives = selectFromPokemonV2AbilitychangeeffecttextSumFields().ability_change_id.language_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilitychangeeffecttextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeeffecttextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext_stddev_pop_fields"), "pokemon_v2_abilitychangeeffecttext_stddev_pop_fields"),
    ability_change_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector extends QueryBuilder {
  get ability_change_id() { return this.__attr(`ability_change_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitychangeeffecttextStddevPopFields() {
  return new PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector()
}

export const pokemonV2AbilitychangeeffecttextStddevPopFieldsModelPrimitives = selectFromPokemonV2AbilitychangeeffecttextStddevPopFields().ability_change_id.language_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextVarianceFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilitychangeeffecttextVarianceFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeeffecttextVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext_variance_fields"), "pokemon_v2_abilitychangeeffecttext_variance_fields"),
    ability_change_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector extends QueryBuilder {
  get ability_change_id() { return this.__attr(`ability_change_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitychangeeffecttextVarianceFields() {
  return new PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector()
}

export const pokemonV2AbilitychangeeffecttextVarianceFieldsModelPrimitives = selectFromPokemonV2AbilitychangeeffecttextVarianceFields().ability_change_id.language_id

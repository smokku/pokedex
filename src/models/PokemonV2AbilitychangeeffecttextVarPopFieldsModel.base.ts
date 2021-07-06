/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextVarPopFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilitychangeeffecttextVarPopFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeeffecttextVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext_var_pop_fields"), "pokemon_v2_abilitychangeeffecttext_var_pop_fields"),
    ability_change_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector extends QueryBuilder {
  get ability_change_id() { return this.__attr(`ability_change_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitychangeeffecttextVarPopFields() {
  return new PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector()
}

export const pokemonV2AbilitychangeeffecttextVarPopFieldsModelPrimitives = selectFromPokemonV2AbilitychangeeffecttextVarPopFields().ability_change_id.language_id

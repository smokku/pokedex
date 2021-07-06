/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityflavortextVarPopFieldsBase
 * auto generated base class for the model PokemonV2AbilityflavortextVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilityflavortextVarPopFieldsModelBase = ModelBase
  .named('PokemonV2AbilityflavortextVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityflavortext_var_pop_fields"), "pokemon_v2_abilityflavortext_var_pop_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityflavortextVarPopFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilityflavortextVarPopFields() {
  return new PokemonV2AbilityflavortextVarPopFieldsModelSelector()
}

export const pokemonV2AbilityflavortextVarPopFieldsModelPrimitives = selectFromPokemonV2AbilityflavortextVarPopFields().ability_id.language_id.version_group_id

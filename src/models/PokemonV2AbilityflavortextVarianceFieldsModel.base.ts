/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityflavortextVarianceFieldsBase
 * auto generated base class for the model PokemonV2AbilityflavortextVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilityflavortextVarianceFieldsModelBase = ModelBase
  .named('PokemonV2AbilityflavortextVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityflavortext_variance_fields"), "pokemon_v2_abilityflavortext_variance_fields"),
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

export class PokemonV2AbilityflavortextVarianceFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilityflavortextVarianceFields() {
  return new PokemonV2AbilityflavortextVarianceFieldsModelSelector()
}

export const pokemonV2AbilityflavortextVarianceFieldsModelPrimitives = selectFromPokemonV2AbilityflavortextVarianceFields().ability_id.language_id.version_group_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityMinFieldsBase
 * auto generated base class for the model PokemonV2AbilityMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2AbilityMinFieldsModelBase = ModelBase
  .named('PokemonV2AbilityMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability_min_fields"), "pokemon_v2_ability_min_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityMinFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2AbilityMinFields() {
  return new PokemonV2AbilityMinFieldsModelSelector()
}

export const pokemonV2AbilityMinFieldsModelPrimitives = selectFromPokemonV2AbilityMinFields().generation_id.name

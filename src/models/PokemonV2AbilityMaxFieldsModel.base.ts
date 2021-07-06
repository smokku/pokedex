/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityMaxFieldsBase
 * auto generated base class for the model PokemonV2AbilityMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2AbilityMaxFieldsModelBase = ModelBase
  .named('PokemonV2AbilityMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability_max_fields"), "pokemon_v2_ability_max_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityMaxFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2AbilityMaxFields() {
  return new PokemonV2AbilityMaxFieldsModelSelector()
}

export const pokemonV2AbilityMaxFieldsModelPrimitives = selectFromPokemonV2AbilityMaxFields().generation_id.name

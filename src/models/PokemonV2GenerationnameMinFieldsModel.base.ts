/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationnameMinFieldsBase
 * auto generated base class for the model PokemonV2GenerationnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2GenerationnameMinFieldsModelBase = ModelBase
  .named('PokemonV2GenerationnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generationname_min_fields"), "pokemon_v2_generationname_min_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationnameMinFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2GenerationnameMinFields() {
  return new PokemonV2GenerationnameMinFieldsModelSelector()
}

export const pokemonV2GenerationnameMinFieldsModelPrimitives = selectFromPokemonV2GenerationnameMinFields().generation_id.language_id.name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationnameMaxFieldsBase
 * auto generated base class for the model PokemonV2GenerationnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2GenerationnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2GenerationnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generationname_max_fields"), "pokemon_v2_generationname_max_fields"),
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

export class PokemonV2GenerationnameMaxFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2GenerationnameMaxFields() {
  return new PokemonV2GenerationnameMaxFieldsModelSelector()
}

export const pokemonV2GenerationnameMaxFieldsModelPrimitives = selectFromPokemonV2GenerationnameMaxFields().generation_id.language_id.name

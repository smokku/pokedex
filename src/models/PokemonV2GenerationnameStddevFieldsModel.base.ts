/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationnameStddevFieldsBase
 * auto generated base class for the model PokemonV2GenerationnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2GenerationnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2GenerationnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generationname_stddev_fields"), "pokemon_v2_generationname_stddev_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationnameStddevFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2GenerationnameStddevFields() {
  return new PokemonV2GenerationnameStddevFieldsModelSelector()
}

export const pokemonV2GenerationnameStddevFieldsModelPrimitives = selectFromPokemonV2GenerationnameStddevFields().generation_id.language_id

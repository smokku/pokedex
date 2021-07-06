/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationnameSumFieldsBase
 * auto generated base class for the model PokemonV2GenerationnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2GenerationnameSumFieldsModelBase = ModelBase
  .named('PokemonV2GenerationnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generationname_sum_fields"), "pokemon_v2_generationname_sum_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationnameSumFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2GenerationnameSumFields() {
  return new PokemonV2GenerationnameSumFieldsModelSelector()
}

export const pokemonV2GenerationnameSumFieldsModelPrimitives = selectFromPokemonV2GenerationnameSumFields().generation_id.language_id

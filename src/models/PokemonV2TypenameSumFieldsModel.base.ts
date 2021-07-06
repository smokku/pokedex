/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameSumFieldsBase
 * auto generated base class for the model PokemonV2TypenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2TypenameSumFieldsModelBase = ModelBase
  .named('PokemonV2TypenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_sum_fields"), "pokemon_v2_typename_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameSumFields() {
  return new PokemonV2TypenameSumFieldsModelSelector()
}

export const pokemonV2TypenameSumFieldsModelPrimitives = selectFromPokemonV2TypenameSumFields().language_id.type_id

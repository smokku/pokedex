/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextSumFieldsBase
 * auto generated base class for the model PokemonV2MoveflavortextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveflavortextSumFieldsModelBase = ModelBase
  .named('PokemonV2MoveflavortextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_sum_fields"), "pokemon_v2_moveflavortext_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveflavortextSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveflavortextSumFields() {
  return new PokemonV2MoveflavortextSumFieldsModelSelector()
}

export const pokemonV2MoveflavortextSumFieldsModelPrimitives = selectFromPokemonV2MoveflavortextSumFields().language_id.move_id.version_group_id

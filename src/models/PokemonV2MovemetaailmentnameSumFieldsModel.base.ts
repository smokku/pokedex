/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameSumFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetaailmentnameSumFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_sum_fields"), "pokemon_v2_movemetaailmentname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_meta_ailment_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
}
export function selectFromPokemonV2MovemetaailmentnameSumFields() {
  return new PokemonV2MovemetaailmentnameSumFieldsModelSelector()
}

export const pokemonV2MovemetaailmentnameSumFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentnameSumFields().language_id.move_meta_ailment_id

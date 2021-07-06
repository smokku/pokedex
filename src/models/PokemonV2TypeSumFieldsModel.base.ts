/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeSumFieldsBase
 * auto generated base class for the model PokemonV2TypeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2TypeSumFieldsModelBase = ModelBase
  .named('PokemonV2TypeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_sum_fields"), "pokemon_v2_type_sum_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeSumFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2TypeSumFields() {
  return new PokemonV2TypeSumFieldsModelSelector()
}

export const pokemonV2TypeSumFieldsModelPrimitives = selectFromPokemonV2TypeSumFields().generation_id.move_damage_class_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeMinFieldsBase
 * auto generated base class for the model PokemonV2TypeMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2TypeMinFieldsModelBase = ModelBase
  .named('PokemonV2TypeMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_min_fields"), "pokemon_v2_type_min_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeMinFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2TypeMinFields() {
  return new PokemonV2TypeMinFieldsModelSelector()
}

export const pokemonV2TypeMinFieldsModelPrimitives = selectFromPokemonV2TypeMinFields().generation_id.move_damage_class_id.name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeMaxFieldsBase
 * auto generated base class for the model PokemonV2TypeMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2TypeMaxFieldsModelBase = ModelBase
  .named('PokemonV2TypeMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_max_fields"), "pokemon_v2_type_max_fields"),
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

export class PokemonV2TypeMaxFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2TypeMaxFields() {
  return new PokemonV2TypeMaxFieldsModelSelector()
}

export const pokemonV2TypeMaxFieldsModelPrimitives = selectFromPokemonV2TypeMaxFields().generation_id.move_damage_class_id.name

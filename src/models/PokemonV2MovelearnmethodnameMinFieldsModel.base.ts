/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodnameMinFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovelearnmethodnameMinFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethodname_min_fields"), "pokemon_v2_movelearnmethodname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovelearnmethodnameMinFields() {
  return new PokemonV2MovelearnmethodnameMinFieldsModelSelector()
}

export const pokemonV2MovelearnmethodnameMinFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodnameMinFields().language_id.move_learn_method_id.name

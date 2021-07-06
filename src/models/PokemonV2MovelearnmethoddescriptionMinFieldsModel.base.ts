/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethoddescriptionMinFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethoddescriptionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovelearnmethoddescriptionMinFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethoddescriptionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethoddescription_min_fields"), "pokemon_v2_movelearnmethoddescription_min_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
}
export function selectFromPokemonV2MovelearnmethoddescriptionMinFields() {
  return new PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector()
}

export const pokemonV2MovelearnmethoddescriptionMinFieldsModelPrimitives = selectFromPokemonV2MovelearnmethoddescriptionMinFields().description.language_id.move_learn_method_id

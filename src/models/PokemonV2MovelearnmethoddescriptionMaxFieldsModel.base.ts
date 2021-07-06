/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethoddescriptionMaxFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethoddescriptionMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovelearnmethoddescriptionMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethoddescriptionMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethoddescription_max_fields"), "pokemon_v2_movelearnmethoddescription_max_fields"),
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

export class PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
}
export function selectFromPokemonV2MovelearnmethoddescriptionMaxFields() {
  return new PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector()
}

export const pokemonV2MovelearnmethoddescriptionMaxFieldsModelPrimitives = selectFromPokemonV2MovelearnmethoddescriptionMaxFields().description.language_id.move_learn_method_id

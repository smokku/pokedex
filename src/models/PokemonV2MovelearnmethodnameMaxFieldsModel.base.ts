/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodnameMaxFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovelearnmethodnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethodname_max_fields"), "pokemon_v2_movelearnmethodname_max_fields"),
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

export class PokemonV2MovelearnmethodnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovelearnmethodnameMaxFields() {
  return new PokemonV2MovelearnmethodnameMaxFieldsModelSelector()
}

export const pokemonV2MovelearnmethodnameMaxFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodnameMaxFields().language_id.move_learn_method_id.name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionMaxFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetacategorydescriptionMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategorydescriptionMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription_max_fields"), "pokemon_v2_movemetacategorydescription_max_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_meta_category_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_category_id() { return this.__attr(`move_meta_category_id`) }
}
export function selectFromPokemonV2MovemetacategorydescriptionMaxFields() {
  return new PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector()
}

export const pokemonV2MovemetacategorydescriptionMaxFieldsModelPrimitives = selectFromPokemonV2MovemetacategorydescriptionMaxFields().description.language_id.move_meta_category_id

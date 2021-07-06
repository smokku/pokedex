/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionStddevFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetacategorydescriptionStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategorydescriptionStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription_stddev_fields"), "pokemon_v2_movemetacategorydescription_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_meta_category_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_category_id() { return this.__attr(`move_meta_category_id`) }
}
export function selectFromPokemonV2MovemetacategorydescriptionStddevFields() {
  return new PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector()
}

export const pokemonV2MovemetacategorydescriptionStddevFieldsModelPrimitives = selectFromPokemonV2MovemetacategorydescriptionStddevFields().language_id.move_meta_category_id

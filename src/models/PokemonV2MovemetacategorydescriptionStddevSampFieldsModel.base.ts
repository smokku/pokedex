/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetacategorydescriptionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategorydescriptionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription_stddev_samp_fields"), "pokemon_v2_movemetacategorydescription_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_meta_category_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_category_id() { return this.__attr(`move_meta_category_id`) }
}
export function selectFromPokemonV2MovemetacategorydescriptionStddevSampFields() {
  return new PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector()
}

export const pokemonV2MovemetacategorydescriptionStddevSampFieldsModelPrimitives = selectFromPokemonV2MovemetacategorydescriptionStddevSampFields().language_id.move_meta_category_id

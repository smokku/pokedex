/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetacategorydescriptionVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategorydescriptionVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription_variance_fields"), "pokemon_v2_movemetacategorydescription_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_meta_category_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_category_id() { return this.__attr(`move_meta_category_id`) }
}
export function selectFromPokemonV2MovemetacategorydescriptionVarianceFields() {
  return new PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector()
}

export const pokemonV2MovemetacategorydescriptionVarianceFieldsModelPrimitives = selectFromPokemonV2MovemetacategorydescriptionVarianceFields().language_id.move_meta_category_id

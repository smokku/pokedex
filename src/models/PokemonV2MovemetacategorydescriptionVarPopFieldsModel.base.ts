/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionVarPopFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetacategorydescriptionVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategorydescriptionVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription_var_pop_fields"), "pokemon_v2_movemetacategorydescription_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_meta_category_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_category_id() { return this.__attr(`move_meta_category_id`) }
}
export function selectFromPokemonV2MovemetacategorydescriptionVarPopFields() {
  return new PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector()
}

export const pokemonV2MovemetacategorydescriptionVarPopFieldsModelPrimitives = selectFromPokemonV2MovemetacategorydescriptionVarPopFields().language_id.move_meta_category_id

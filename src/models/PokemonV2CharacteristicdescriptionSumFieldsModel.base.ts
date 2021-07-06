/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2CharacteristicdescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicdescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription_sum_fields"), "pokemon_v2_characteristicdescription_sum_fields"),
    characteristic_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionSumFieldsModelSelector extends QueryBuilder {
  get characteristic_id() { return this.__attr(`characteristic_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2CharacteristicdescriptionSumFields() {
  return new PokemonV2CharacteristicdescriptionSumFieldsModelSelector()
}

export const pokemonV2CharacteristicdescriptionSumFieldsModelPrimitives = selectFromPokemonV2CharacteristicdescriptionSumFields().characteristic_id.language_id

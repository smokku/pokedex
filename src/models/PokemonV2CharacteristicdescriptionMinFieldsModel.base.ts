/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionMinFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2CharacteristicdescriptionMinFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicdescriptionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription_min_fields"), "pokemon_v2_characteristicdescription_min_fields"),
    characteristic_id: types.union(types.undefined, types.null, types.integer),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionMinFieldsModelSelector extends QueryBuilder {
  get characteristic_id() { return this.__attr(`characteristic_id`) }
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2CharacteristicdescriptionMinFields() {
  return new PokemonV2CharacteristicdescriptionMinFieldsModelSelector()
}

export const pokemonV2CharacteristicdescriptionMinFieldsModelPrimitives = selectFromPokemonV2CharacteristicdescriptionMinFields().characteristic_id.description.language_id

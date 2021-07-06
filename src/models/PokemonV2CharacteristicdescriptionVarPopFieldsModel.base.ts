/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionVarPopFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2CharacteristicdescriptionVarPopFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicdescriptionVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription_var_pop_fields"), "pokemon_v2_characteristicdescription_var_pop_fields"),
    characteristic_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector extends QueryBuilder {
  get characteristic_id() { return this.__attr(`characteristic_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2CharacteristicdescriptionVarPopFields() {
  return new PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector()
}

export const pokemonV2CharacteristicdescriptionVarPopFieldsModelPrimitives = selectFromPokemonV2CharacteristicdescriptionVarPopFields().characteristic_id.language_id

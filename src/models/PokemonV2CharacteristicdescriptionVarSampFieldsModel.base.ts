/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionVarSampFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2CharacteristicdescriptionVarSampFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicdescriptionVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription_var_samp_fields"), "pokemon_v2_characteristicdescription_var_samp_fields"),
    characteristic_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector extends QueryBuilder {
  get characteristic_id() { return this.__attr(`characteristic_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2CharacteristicdescriptionVarSampFields() {
  return new PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector()
}

export const pokemonV2CharacteristicdescriptionVarSampFieldsModelPrimitives = selectFromPokemonV2CharacteristicdescriptionVarSampFields().characteristic_id.language_id

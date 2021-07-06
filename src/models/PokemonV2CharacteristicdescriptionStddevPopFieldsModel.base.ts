/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionStddevPopFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2CharacteristicdescriptionStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicdescriptionStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription_stddev_pop_fields"), "pokemon_v2_characteristicdescription_stddev_pop_fields"),
    characteristic_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector extends QueryBuilder {
  get characteristic_id() { return this.__attr(`characteristic_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2CharacteristicdescriptionStddevPopFields() {
  return new PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector()
}

export const pokemonV2CharacteristicdescriptionStddevPopFieldsModelPrimitives = selectFromPokemonV2CharacteristicdescriptionStddevPopFields().characteristic_id.language_id

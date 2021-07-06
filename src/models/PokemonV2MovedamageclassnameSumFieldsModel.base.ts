/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassnameSumFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovedamageclassnameSumFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassname_sum_fields"), "pokemon_v2_movedamageclassname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassnameSumFields() {
  return new PokemonV2MovedamageclassnameSumFieldsModelSelector()
}

export const pokemonV2MovedamageclassnameSumFieldsModelPrimitives = selectFromPokemonV2MovedamageclassnameSumFields().language_id.move_damage_class_id

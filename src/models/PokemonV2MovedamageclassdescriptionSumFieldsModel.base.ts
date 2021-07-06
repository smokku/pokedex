/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovedamageclassdescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_sum_fields"), "pokemon_v2_movedamageclassdescription_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassdescriptionSumFields() {
  return new PokemonV2MovedamageclassdescriptionSumFieldsModelSelector()
}

export const pokemonV2MovedamageclassdescriptionSumFieldsModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionSumFields().language_id.move_damage_class_id

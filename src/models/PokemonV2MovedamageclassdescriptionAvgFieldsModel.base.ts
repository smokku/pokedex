/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionAvgFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovedamageclassdescriptionAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_avg_fields"), "pokemon_v2_movedamageclassdescription_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassdescriptionAvgFields() {
  return new PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector()
}

export const pokemonV2MovedamageclassdescriptionAvgFieldsModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionAvgFields().language_id.move_damage_class_id

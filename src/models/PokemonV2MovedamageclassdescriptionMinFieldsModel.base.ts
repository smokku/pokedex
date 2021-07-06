/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionMinFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovedamageclassdescriptionMinFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_min_fields"), "pokemon_v2_movedamageclassdescription_min_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionMinFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassdescriptionMinFields() {
  return new PokemonV2MovedamageclassdescriptionMinFieldsModelSelector()
}

export const pokemonV2MovedamageclassdescriptionMinFieldsModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionMinFields().description.language_id.move_damage_class_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassnameMaxFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovedamageclassnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassname_max_fields"), "pokemon_v2_movedamageclassname_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovedamageclassnameMaxFields() {
  return new PokemonV2MovedamageclassnameMaxFieldsModelSelector()
}

export const pokemonV2MovedamageclassnameMaxFieldsModelPrimitives = selectFromPokemonV2MovedamageclassnameMaxFields().language_id.move_damage_class_id.name

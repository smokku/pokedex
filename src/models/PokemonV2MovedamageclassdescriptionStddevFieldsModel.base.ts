/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionStddevFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovedamageclassdescriptionStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_stddev_fields"), "pokemon_v2_movedamageclassdescription_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassdescriptionStddevFields() {
  return new PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector()
}

export const pokemonV2MovedamageclassdescriptionStddevFieldsModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionStddevFields().language_id.move_damage_class_id

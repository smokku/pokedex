/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovedamageclassdescriptionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_stddev_samp_fields"), "pokemon_v2_movedamageclassdescription_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassdescriptionStddevSampFields() {
  return new PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector()
}

export const pokemonV2MovedamageclassdescriptionStddevSampFieldsModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionStddevSampFields().language_id.move_damage_class_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovedamageclassnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassname_stddev_samp_fields"), "pokemon_v2_movedamageclassname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassnameStddevSampFields() {
  return new PokemonV2MovedamageclassnameStddevSampFieldsModelSelector()
}

export const pokemonV2MovedamageclassnameStddevSampFieldsModelPrimitives = selectFromPokemonV2MovedamageclassnameStddevSampFields().language_id.move_damage_class_id

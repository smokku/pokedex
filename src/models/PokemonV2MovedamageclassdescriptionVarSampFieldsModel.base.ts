/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovedamageclassdescriptionVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_var_samp_fields"), "pokemon_v2_movedamageclassdescription_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2MovedamageclassdescriptionVarSampFields() {
  return new PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector()
}

export const pokemonV2MovedamageclassdescriptionVarSampFieldsModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionVarSampFields().language_id.move_damage_class_id

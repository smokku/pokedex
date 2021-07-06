/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeVarSampFieldsBase
 * auto generated base class for the model PokemonV2TypeVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2TypeVarSampFieldsModelBase = ModelBase
  .named('PokemonV2TypeVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_var_samp_fields"), "pokemon_v2_type_var_samp_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeVarSampFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2TypeVarSampFields() {
  return new PokemonV2TypeVarSampFieldsModelSelector()
}

export const pokemonV2TypeVarSampFieldsModelPrimitives = selectFromPokemonV2TypeVarSampFields().generation_id.move_damage_class_id

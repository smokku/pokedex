/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethoddescriptionVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethoddescriptionVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovelearnmethoddescriptionVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethoddescriptionVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethoddescription_var_samp_fields"), "pokemon_v2_movelearnmethoddescription_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_learn_method_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
}
export function selectFromPokemonV2MovelearnmethoddescriptionVarSampFields() {
  return new PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector()
}

export const pokemonV2MovelearnmethoddescriptionVarSampFieldsModelPrimitives = selectFromPokemonV2MovelearnmethoddescriptionVarSampFields().language_id.move_learn_method_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetdescriptionVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovetargetdescriptionVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovetargetdescriptionVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetdescriptionVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetdescription_var_samp_fields"), "pokemon_v2_movetargetdescription_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_target_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetdescriptionVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
}
export function selectFromPokemonV2MovetargetdescriptionVarSampFields() {
  return new PokemonV2MovetargetdescriptionVarSampFieldsModelSelector()
}

export const pokemonV2MovetargetdescriptionVarSampFieldsModelPrimitives = selectFromPokemonV2MovetargetdescriptionVarSampFields().language_id.move_target_id

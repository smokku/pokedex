/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetdescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2MovetargetdescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovetargetdescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetdescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetdescription_sum_fields"), "pokemon_v2_movetargetdescription_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_target_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetdescriptionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
}
export function selectFromPokemonV2MovetargetdescriptionSumFields() {
  return new PokemonV2MovetargetdescriptionSumFieldsModelSelector()
}

export const pokemonV2MovetargetdescriptionSumFieldsModelPrimitives = selectFromPokemonV2MovetargetdescriptionSumFields().language_id.move_target_id

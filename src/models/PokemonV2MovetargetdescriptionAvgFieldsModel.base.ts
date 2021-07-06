/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetdescriptionAvgFieldsBase
 * auto generated base class for the model PokemonV2MovetargetdescriptionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovetargetdescriptionAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetdescriptionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetdescription_avg_fields"), "pokemon_v2_movetargetdescription_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_target_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetdescriptionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
}
export function selectFromPokemonV2MovetargetdescriptionAvgFields() {
  return new PokemonV2MovetargetdescriptionAvgFieldsModelSelector()
}

export const pokemonV2MovetargetdescriptionAvgFieldsModelPrimitives = selectFromPokemonV2MovetargetdescriptionAvgFields().language_id.move_target_id

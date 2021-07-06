/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovetargetnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovetargetnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetname_stddev_samp_fields"), "pokemon_v2_movetargetname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_target_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
}
export function selectFromPokemonV2MovetargetnameStddevSampFields() {
  return new PokemonV2MovetargetnameStddevSampFieldsModelSelector()
}

export const pokemonV2MovetargetnameStddevSampFieldsModelPrimitives = selectFromPokemonV2MovetargetnameStddevSampFields().language_id.move_target_id

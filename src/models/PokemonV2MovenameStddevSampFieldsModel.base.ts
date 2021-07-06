/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovenameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovenameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovenameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_stddev_samp_fields"), "pokemon_v2_movename_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MovenameStddevSampFields() {
  return new PokemonV2MovenameStddevSampFieldsModelSelector()
}

export const pokemonV2MovenameStddevSampFieldsModelPrimitives = selectFromPokemonV2MovenameStddevSampFields().language_id.move_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameStddevFieldsBase
 * auto generated base class for the model PokemonV2MovenameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovenameStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovenameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_stddev_fields"), "pokemon_v2_movename_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MovenameStddevFields() {
  return new PokemonV2MovenameStddevFieldsModelSelector()
}

export const pokemonV2MovenameStddevFieldsModelPrimitives = selectFromPokemonV2MovenameStddevFields().language_id.move_id

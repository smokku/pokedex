/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MovenameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovenameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MovenameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_stddev_pop_fields"), "pokemon_v2_movename_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MovenameStddevPopFields() {
  return new PokemonV2MovenameStddevPopFieldsModelSelector()
}

export const pokemonV2MovenameStddevPopFieldsModelPrimitives = selectFromPokemonV2MovenameStddevPopFields().language_id.move_id

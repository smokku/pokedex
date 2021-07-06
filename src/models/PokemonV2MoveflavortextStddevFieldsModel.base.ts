/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextStddevFieldsBase
 * auto generated base class for the model PokemonV2MoveflavortextStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveflavortextStddevFieldsModelBase = ModelBase
  .named('PokemonV2MoveflavortextStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_stddev_fields"), "pokemon_v2_moveflavortext_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveflavortextStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveflavortextStddevFields() {
  return new PokemonV2MoveflavortextStddevFieldsModelSelector()
}

export const pokemonV2MoveflavortextStddevFieldsModelPrimitives = selectFromPokemonV2MoveflavortextStddevFields().language_id.move_id.version_group_id

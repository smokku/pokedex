/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MoveflavortextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveflavortextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveflavortextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_stddev_pop_fields"), "pokemon_v2_moveflavortext_stddev_pop_fields"),
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

export class PokemonV2MoveflavortextStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveflavortextStddevPopFields() {
  return new PokemonV2MoveflavortextStddevPopFieldsModelSelector()
}

export const pokemonV2MoveflavortextStddevPopFieldsModelPrimitives = selectFromPokemonV2MoveflavortextStddevPopFields().language_id.move_id.version_group_id

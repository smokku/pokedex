/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetaailmentnameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_stddev_pop_fields"), "pokemon_v2_movemetaailmentname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_meta_ailment_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
}
export function selectFromPokemonV2MovemetaailmentnameStddevPopFields() {
  return new PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector()
}

export const pokemonV2MovemetaailmentnameStddevPopFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentnameStddevPopFields().language_id.move_meta_ailment_id

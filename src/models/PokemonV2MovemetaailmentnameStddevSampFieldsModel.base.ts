/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetaailmentnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_stddev_samp_fields"), "pokemon_v2_movemetaailmentname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_meta_ailment_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
}
export function selectFromPokemonV2MovemetaailmentnameStddevSampFields() {
  return new PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector()
}

export const pokemonV2MovemetaailmentnameStddevSampFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentnameStddevSampFields().language_id.move_meta_ailment_id

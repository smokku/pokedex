/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguagenameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2LanguagenameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LanguagenameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2LanguagenameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_languagename_stddev_samp_fields"), "pokemon_v2_languagename_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    local_language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguagenameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get local_language_id() { return this.__attr(`local_language_id`) }
}
export function selectFromPokemonV2LanguagenameStddevSampFields() {
  return new PokemonV2LanguagenameStddevSampFieldsModelSelector()
}

export const pokemonV2LanguagenameStddevSampFieldsModelPrimitives = selectFromPokemonV2LanguagenameStddevSampFields().language_id.local_language_id

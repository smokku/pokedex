/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2TypenameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2TypenameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2TypenameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_stddev_samp_fields"), "pokemon_v2_typename_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameStddevSampFields() {
  return new PokemonV2TypenameStddevSampFieldsModelSelector()
}

export const pokemonV2TypenameStddevSampFieldsModelPrimitives = selectFromPokemonV2TypenameStddevSampFields().language_id.type_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturenameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2NaturenameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2NaturenameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2NaturenameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturename_stddev_samp_fields"), "pokemon_v2_naturename_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    nature_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturenameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturenameStddevSampFields() {
  return new PokemonV2NaturenameStddevSampFieldsModelSelector()
}

export const pokemonV2NaturenameStddevSampFieldsModelPrimitives = selectFromPokemonV2NaturenameStddevSampFields().language_id.nature_id

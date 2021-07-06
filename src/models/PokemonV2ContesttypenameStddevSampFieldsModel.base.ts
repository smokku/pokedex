/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ContesttypenameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesttypenameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypenameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename_stddev_samp_fields"), "pokemon_v2_contesttypename_stddev_samp_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameStddevSampFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesttypenameStddevSampFields() {
  return new PokemonV2ContesttypenameStddevSampFieldsModelSelector()
}

export const pokemonV2ContesttypenameStddevSampFieldsModelPrimitives = selectFromPokemonV2ContesttypenameStddevSampFields().contest_type_id.language_id

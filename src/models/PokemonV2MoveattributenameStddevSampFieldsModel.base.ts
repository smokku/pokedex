/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributenameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MoveattributenameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveattributenameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributenameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributename_stddev_samp_fields"), "pokemon_v2_moveattributename_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_attribute_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributenameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
}
export function selectFromPokemonV2MoveattributenameStddevSampFields() {
  return new PokemonV2MoveattributenameStddevSampFieldsModelSelector()
}

export const pokemonV2MoveattributenameStddevSampFieldsModelPrimitives = selectFromPokemonV2MoveattributenameStddevSampFields().language_id.move_attribute_id

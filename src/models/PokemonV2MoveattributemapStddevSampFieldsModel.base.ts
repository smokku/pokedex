/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributemapStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MoveattributemapStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveattributemapStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributemapStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributemap_stddev_samp_fields"), "pokemon_v2_moveattributemap_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_attribute_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributemapStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MoveattributemapStddevSampFields() {
  return new PokemonV2MoveattributemapStddevSampFieldsModelSelector()
}

export const pokemonV2MoveattributemapStddevSampFieldsModelPrimitives = selectFromPokemonV2MoveattributemapStddevSampFields().move_attribute_id.move_id

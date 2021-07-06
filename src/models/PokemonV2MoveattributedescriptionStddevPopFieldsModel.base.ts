/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributedescriptionStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MoveattributedescriptionStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveattributedescriptionStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributedescriptionStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributedescription_stddev_pop_fields"), "pokemon_v2_moveattributedescription_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_attribute_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
}
export function selectFromPokemonV2MoveattributedescriptionStddevPopFields() {
  return new PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector()
}

export const pokemonV2MoveattributedescriptionStddevPopFieldsModelPrimitives = selectFromPokemonV2MoveattributedescriptionStddevPopFields().language_id.move_attribute_id

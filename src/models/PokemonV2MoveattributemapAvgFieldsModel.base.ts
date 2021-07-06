/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributemapAvgFieldsBase
 * auto generated base class for the model PokemonV2MoveattributemapAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveattributemapAvgFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributemapAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributemap_avg_fields"), "pokemon_v2_moveattributemap_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_attribute_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributemapAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MoveattributemapAvgFields() {
  return new PokemonV2MoveattributemapAvgFieldsModelSelector()
}

export const pokemonV2MoveattributemapAvgFieldsModelPrimitives = selectFromPokemonV2MoveattributemapAvgFields().move_attribute_id.move_id

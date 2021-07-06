/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributemapVarianceFieldsBase
 * auto generated base class for the model PokemonV2MoveattributemapVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveattributemapVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributemapVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributemap_variance_fields"), "pokemon_v2_moveattributemap_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_attribute_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributemapVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MoveattributemapVarianceFields() {
  return new PokemonV2MoveattributemapVarianceFieldsModelSelector()
}

export const pokemonV2MoveattributemapVarianceFieldsModelPrimitives = selectFromPokemonV2MoveattributemapVarianceFields().move_attribute_id.move_id

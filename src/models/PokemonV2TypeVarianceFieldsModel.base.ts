/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeVarianceFieldsBase
 * auto generated base class for the model PokemonV2TypeVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2TypeVarianceFieldsModelBase = ModelBase
  .named('PokemonV2TypeVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_variance_fields"), "pokemon_v2_type_variance_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeVarianceFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2TypeVarianceFields() {
  return new PokemonV2TypeVarianceFieldsModelSelector()
}

export const pokemonV2TypeVarianceFieldsModelPrimitives = selectFromPokemonV2TypeVarianceFields().generation_id.move_damage_class_id

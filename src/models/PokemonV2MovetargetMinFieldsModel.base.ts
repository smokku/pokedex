/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetMinFieldsBase
 * auto generated base class for the model PokemonV2MovetargetMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovetargetMinFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_min_fields"), "pokemon_v2_movetarget_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovetargetMinFields() {
  return new PokemonV2MovetargetMinFieldsModelSelector()
}

export const pokemonV2MovetargetMinFieldsModelPrimitives = selectFromPokemonV2MovetargetMinFields().name

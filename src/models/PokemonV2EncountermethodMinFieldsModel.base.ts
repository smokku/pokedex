/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodMinFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncountermethodMinFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_min_fields"), "pokemon_v2_encountermethod_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    order: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodMinFields() {
  return new PokemonV2EncountermethodMinFieldsModelSelector()
}

export const pokemonV2EncountermethodMinFieldsModelPrimitives = selectFromPokemonV2EncountermethodMinFields().name.order

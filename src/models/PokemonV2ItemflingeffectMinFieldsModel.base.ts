/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectMinFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemflingeffectMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_min_fields"), "pokemon_v2_itemflingeffect_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItemflingeffectMinFields() {
  return new PokemonV2ItemflingeffectMinFieldsModelSelector()
}

export const pokemonV2ItemflingeffectMinFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectMinFields().name

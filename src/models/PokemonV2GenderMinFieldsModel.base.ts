/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderMinFieldsBase
 * auto generated base class for the model PokemonV2GenderMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2GenderMinFieldsModelBase = ModelBase
  .named('PokemonV2GenderMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_min_fields"), "pokemon_v2_gender_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2GenderMinFields() {
  return new PokemonV2GenderMinFieldsModelSelector()
}

export const pokemonV2GenderMinFieldsModelPrimitives = selectFromPokemonV2GenderMinFields().name

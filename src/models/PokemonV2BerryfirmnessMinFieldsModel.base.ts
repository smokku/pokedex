/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessMinFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2BerryfirmnessMinFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_min_fields"), "pokemon_v2_berryfirmness_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2BerryfirmnessMinFields() {
  return new PokemonV2BerryfirmnessMinFieldsModelSelector()
}

export const pokemonV2BerryfirmnessMinFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessMinFields().name

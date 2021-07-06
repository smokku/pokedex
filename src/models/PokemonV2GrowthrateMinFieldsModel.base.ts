/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateMinFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2GrowthrateMinFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_min_fields"), "pokemon_v2_growthrate_min_fields"),
    formula: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateMinFieldsModelSelector extends QueryBuilder {
  get formula() { return this.__attr(`formula`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2GrowthrateMinFields() {
  return new PokemonV2GrowthrateMinFieldsModelSelector()
}

export const pokemonV2GrowthrateMinFieldsModelPrimitives = selectFromPokemonV2GrowthrateMinFields().formula.name

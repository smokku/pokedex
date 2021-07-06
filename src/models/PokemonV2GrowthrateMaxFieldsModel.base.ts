/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateMaxFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2GrowthrateMaxFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_max_fields"), "pokemon_v2_growthrate_max_fields"),
    formula: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateMaxFieldsModelSelector extends QueryBuilder {
  get formula() { return this.__attr(`formula`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2GrowthrateMaxFields() {
  return new PokemonV2GrowthrateMaxFieldsModelSelector()
}

export const pokemonV2GrowthrateMaxFieldsModelPrimitives = selectFromPokemonV2GrowthrateMaxFields().formula.name

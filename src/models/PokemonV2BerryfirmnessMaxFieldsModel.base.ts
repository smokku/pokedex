/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessMaxFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2BerryfirmnessMaxFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_max_fields"), "pokemon_v2_berryfirmness_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2BerryfirmnessMaxFields() {
  return new PokemonV2BerryfirmnessMaxFieldsModelSelector()
}

export const pokemonV2BerryfirmnessMaxFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessMaxFields().name

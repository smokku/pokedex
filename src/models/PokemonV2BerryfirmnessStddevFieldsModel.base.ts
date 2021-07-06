/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessStddevFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryfirmnessStddevFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_stddev_fields"), "pokemon_v2_berryfirmness_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryfirmnessStddevFields() {
  return new PokemonV2BerryfirmnessStddevFieldsModelSelector()
}

export const pokemonV2BerryfirmnessStddevFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessStddevFields()

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodStddevPopFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncountermethodStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_stddev_pop_fields"), "pokemon_v2_encountermethod_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodStddevPopFields() {
  return new PokemonV2EncountermethodStddevPopFieldsModelSelector()
}

export const pokemonV2EncountermethodStddevPopFieldsModelPrimitives = selectFromPokemonV2EncountermethodStddevPopFields().order

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodStddevFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncountermethodStddevFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_stddev_fields"), "pokemon_v2_encountermethod_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodStddevFields() {
  return new PokemonV2EncountermethodStddevFieldsModelSelector()
}

export const pokemonV2EncountermethodStddevFieldsModelPrimitives = selectFromPokemonV2EncountermethodStddevFields().order

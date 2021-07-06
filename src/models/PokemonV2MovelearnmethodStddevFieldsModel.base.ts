/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodStddevFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovelearnmethodStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethod_stddev_fields"), "pokemon_v2_movelearnmethod_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovelearnmethodStddevFields() {
  return new PokemonV2MovelearnmethodStddevFieldsModelSelector()
}

export const pokemonV2MovelearnmethodStddevFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodStddevFields()

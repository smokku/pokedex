/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemattributeStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemattributeStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributeStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute_stddev_fields"), "pokemon_v2_itemattribute_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemattributeStddevFields() {
  return new PokemonV2ItemattributeStddevFieldsModelSelector()
}

export const pokemonV2ItemattributeStddevFieldsModelPrimitives = selectFromPokemonV2ItemattributeStddevFields()

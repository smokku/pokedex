/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategoryStddevFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategoryStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetacategoryStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategoryStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategory_stddev_fields"), "pokemon_v2_movemetacategory_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategoryStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetacategoryStddevFields() {
  return new PokemonV2MovemetacategoryStddevFieldsModelSelector()
}

export const pokemonV2MovemetacategoryStddevFieldsModelPrimitives = selectFromPokemonV2MovemetacategoryStddevFields()

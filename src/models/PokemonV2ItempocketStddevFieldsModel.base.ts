/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketStddevFieldsBase
 * auto generated base class for the model PokemonV2ItempocketStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItempocketStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_stddev_fields"), "pokemon_v2_itempocket_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItempocketStddevFields() {
  return new PokemonV2ItempocketStddevFieldsModelSelector()
}

export const pokemonV2ItempocketStddevFieldsModelPrimitives = selectFromPokemonV2ItempocketStddevFields()

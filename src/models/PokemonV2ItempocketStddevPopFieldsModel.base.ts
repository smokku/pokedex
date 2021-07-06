/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItempocketStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItempocketStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_stddev_pop_fields"), "pokemon_v2_itempocket_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItempocketStddevPopFields() {
  return new PokemonV2ItempocketStddevPopFieldsModelSelector()
}

export const pokemonV2ItempocketStddevPopFieldsModelPrimitives = selectFromPokemonV2ItempocketStddevPopFields()

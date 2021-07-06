/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeStddevFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesttypeStddevFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_stddev_fields"), "pokemon_v2_contesttype_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ContesttypeStddevFields() {
  return new PokemonV2ContesttypeStddevFieldsModelSelector()
}

export const pokemonV2ContesttypeStddevFieldsModelPrimitives = selectFromPokemonV2ContesttypeStddevFields()

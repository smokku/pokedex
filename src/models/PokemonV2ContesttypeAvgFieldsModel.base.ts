/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeAvgFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ContesttypeAvgFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_avg_fields"), "pokemon_v2_contesttype_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ContesttypeAvgFields() {
  return new PokemonV2ContesttypeAvgFieldsModelSelector()
}

export const pokemonV2ContesttypeAvgFieldsModelPrimitives = selectFromPokemonV2ContesttypeAvgFields()

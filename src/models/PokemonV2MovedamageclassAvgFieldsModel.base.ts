/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassAvgFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovedamageclassAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_avg_fields"), "pokemon_v2_movedamageclass_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovedamageclassAvgFields() {
  return new PokemonV2MovedamageclassAvgFieldsModelSelector()
}

export const pokemonV2MovedamageclassAvgFieldsModelPrimitives = selectFromPokemonV2MovedamageclassAvgFields()

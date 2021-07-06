/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassSumFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovedamageclassSumFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_sum_fields"), "pokemon_v2_movedamageclass_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovedamageclassSumFields() {
  return new PokemonV2MovedamageclassSumFieldsModelSelector()
}

export const pokemonV2MovedamageclassSumFieldsModelPrimitives = selectFromPokemonV2MovedamageclassSumFields()

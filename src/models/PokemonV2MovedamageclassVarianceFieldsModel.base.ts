/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovedamageclassVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_variance_fields"), "pokemon_v2_movedamageclass_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovedamageclassVarianceFields() {
  return new PokemonV2MovedamageclassVarianceFieldsModelSelector()
}

export const pokemonV2MovedamageclassVarianceFieldsModelPrimitives = selectFromPokemonV2MovedamageclassVarianceFields()

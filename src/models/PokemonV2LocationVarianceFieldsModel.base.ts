/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationVarianceFieldsBase
 * auto generated base class for the model PokemonV2LocationVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2LocationVarianceFieldsModelBase = ModelBase
  .named('PokemonV2LocationVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_variance_fields"), "pokemon_v2_location_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2LocationVarianceFields() {
  return new PokemonV2LocationVarianceFieldsModelSelector()
}

export const pokemonV2LocationVarianceFieldsModelPrimitives = selectFromPokemonV2LocationVarianceFields().region_id

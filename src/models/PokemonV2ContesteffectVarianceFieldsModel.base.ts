/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectVarianceFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesteffectVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_variance_fields"), "pokemon_v2_contesteffect_variance_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    jam: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectVarianceFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
}
export function selectFromPokemonV2ContesteffectVarianceFields() {
  return new PokemonV2ContesteffectVarianceFieldsModelSelector()
}

export const pokemonV2ContesteffectVarianceFieldsModelPrimitives = selectFromPokemonV2ContesteffectVarianceFields().appeal.jam

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectVarianceFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2SupercontesteffectVarianceFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_variance_fields"), "pokemon_v2_supercontesteffect_variance_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectVarianceFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectVarianceFields() {
  return new PokemonV2SupercontesteffectVarianceFieldsModelSelector()
}

export const pokemonV2SupercontesteffectVarianceFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectVarianceFields().appeal

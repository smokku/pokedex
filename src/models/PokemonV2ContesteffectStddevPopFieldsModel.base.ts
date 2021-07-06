/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContesteffectStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_stddev_pop_fields"), "pokemon_v2_contesteffect_stddev_pop_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    jam: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectStddevPopFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
}
export function selectFromPokemonV2ContesteffectStddevPopFields() {
  return new PokemonV2ContesteffectStddevPopFieldsModelSelector()
}

export const pokemonV2ContesteffectStddevPopFieldsModelPrimitives = selectFromPokemonV2ContesteffectStddevPopFields().appeal.jam

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectStddevFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesteffectStddevFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_stddev_fields"), "pokemon_v2_contesteffect_stddev_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    jam: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectStddevFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
}
export function selectFromPokemonV2ContesteffectStddevFields() {
  return new PokemonV2ContesteffectStddevFieldsModelSelector()
}

export const pokemonV2ContesteffectStddevFieldsModelPrimitives = selectFromPokemonV2ContesteffectStddevFields().appeal.jam

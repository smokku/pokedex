/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectStddevFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2SupercontesteffectStddevFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_stddev_fields"), "pokemon_v2_supercontesteffect_stddev_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectStddevFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectStddevFields() {
  return new PokemonV2SupercontesteffectStddevFieldsModelSelector()
}

export const pokemonV2SupercontesteffectStddevFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectStddevFields().appeal

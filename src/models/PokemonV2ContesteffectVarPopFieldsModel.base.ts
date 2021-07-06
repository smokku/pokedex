/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectVarPopFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContesteffectVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_var_pop_fields"), "pokemon_v2_contesteffect_var_pop_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    jam: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectVarPopFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
}
export function selectFromPokemonV2ContesteffectVarPopFields() {
  return new PokemonV2ContesteffectVarPopFieldsModelSelector()
}

export const pokemonV2ContesteffectVarPopFieldsModelPrimitives = selectFromPokemonV2ContesteffectVarPopFields().appeal.jam

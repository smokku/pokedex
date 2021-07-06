/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectVarPopFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2SupercontesteffectVarPopFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_var_pop_fields"), "pokemon_v2_supercontesteffect_var_pop_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectVarPopFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectVarPopFields() {
  return new PokemonV2SupercontesteffectVarPopFieldsModelSelector()
}

export const pokemonV2SupercontesteffectVarPopFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectVarPopFields().appeal

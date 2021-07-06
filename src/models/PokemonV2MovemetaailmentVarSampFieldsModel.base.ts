/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetaailmentVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_var_samp_fields"), "pokemon_v2_movemetaailment_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetaailmentVarSampFields() {
  return new PokemonV2MovemetaailmentVarSampFieldsModelSelector()
}

export const pokemonV2MovemetaailmentVarSampFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentVarSampFields()

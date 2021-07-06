/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderVarSampFieldsBase
 * auto generated base class for the model PokemonV2GenderVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2GenderVarSampFieldsModelBase = ModelBase
  .named('PokemonV2GenderVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_var_samp_fields"), "pokemon_v2_gender_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GenderVarSampFields() {
  return new PokemonV2GenderVarSampFieldsModelSelector()
}

export const pokemonV2GenderVarSampFieldsModelPrimitives = selectFromPokemonV2GenderVarSampFields()

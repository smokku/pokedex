/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupVarSampFieldsBase
 * auto generated base class for the model PokemonV2EgggroupVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EgggroupVarSampFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_var_samp_fields"), "pokemon_v2_egggroup_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EgggroupVarSampFields() {
  return new PokemonV2EgggroupVarSampFieldsModelSelector()
}

export const pokemonV2EgggroupVarSampFieldsModelPrimitives = selectFromPokemonV2EgggroupVarSampFields()

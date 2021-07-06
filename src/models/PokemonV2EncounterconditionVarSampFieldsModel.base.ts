/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionVarSampFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionVarSampFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_var_samp_fields"), "pokemon_v2_encountercondition_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionVarSampFields() {
  return new PokemonV2EncounterconditionVarSampFieldsModelSelector()
}

export const pokemonV2EncounterconditionVarSampFieldsModelPrimitives = selectFromPokemonV2EncounterconditionVarSampFields()

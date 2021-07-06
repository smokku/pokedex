/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueVarSampFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionvalueVarSampFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_var_samp_fields"), "pokemon_v2_encounterconditionvalue_var_samp_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueVarSampFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueVarSampFields() {
  return new PokemonV2EncounterconditionvalueVarSampFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueVarSampFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueVarSampFields().encounter_condition_id

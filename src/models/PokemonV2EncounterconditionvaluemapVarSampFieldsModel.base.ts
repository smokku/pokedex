/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapVarSampFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionvaluemapVarSampFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_var_samp_fields"), "pokemon_v2_encounterconditionvaluemap_var_samp_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    encounter_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvaluemapVarSampFields() {
  return new PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapVarSampFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapVarSampFields().encounter_condition_value_id.encounter_id

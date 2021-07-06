/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapVarPopFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionvaluemapVarPopFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_var_pop_fields"), "pokemon_v2_encounterconditionvaluemap_var_pop_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    encounter_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvaluemapVarPopFields() {
  return new PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapVarPopFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapVarPopFields().encounter_condition_value_id.encounter_id

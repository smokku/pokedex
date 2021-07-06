/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameVarPopFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionvaluenameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluenameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename_var_pop_fields"), "pokemon_v2_encounterconditionvaluename_var_pop_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionvaluenameVarPopFields() {
  return new PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluenameVarPopFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluenameVarPopFields().encounter_condition_value_id.language_id

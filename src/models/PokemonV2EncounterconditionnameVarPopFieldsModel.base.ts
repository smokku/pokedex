/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname_var_pop_fields"), "pokemon_v2_encounterconditionname_var_pop_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameVarPopFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionnameVarPopFields() {
  return new PokemonV2EncounterconditionnameVarPopFieldsModelSelector()
}

export const pokemonV2EncounterconditionnameVarPopFieldsModelPrimitives = selectFromPokemonV2EncounterconditionnameVarPopFields().encounter_condition_id.language_id

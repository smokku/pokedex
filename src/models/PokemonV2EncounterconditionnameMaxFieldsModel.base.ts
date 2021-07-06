/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameMaxFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname_max_fields"), "pokemon_v2_encounterconditionname_max_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameMaxFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncounterconditionnameMaxFields() {
  return new PokemonV2EncounterconditionnameMaxFieldsModelSelector()
}

export const pokemonV2EncounterconditionnameMaxFieldsModelPrimitives = selectFromPokemonV2EncounterconditionnameMaxFields().encounter_condition_id.language_id.name

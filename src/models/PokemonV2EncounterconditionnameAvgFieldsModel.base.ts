/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameAvgFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname_avg_fields"), "pokemon_v2_encounterconditionname_avg_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameAvgFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionnameAvgFields() {
  return new PokemonV2EncounterconditionnameAvgFieldsModelSelector()
}

export const pokemonV2EncounterconditionnameAvgFieldsModelPrimitives = selectFromPokemonV2EncounterconditionnameAvgFields().encounter_condition_id.language_id

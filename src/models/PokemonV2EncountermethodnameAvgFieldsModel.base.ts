/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameAvgFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EncountermethodnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_avg_fields"), "pokemon_v2_encountermethodname_avg_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameAvgFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncountermethodnameAvgFields() {
  return new PokemonV2EncountermethodnameAvgFieldsModelSelector()
}

export const pokemonV2EncountermethodnameAvgFieldsModelPrimitives = selectFromPokemonV2EncountermethodnameAvgFields().encounter_method_id.language_id

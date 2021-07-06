/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameMaxFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EncountermethodnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_max_fields"), "pokemon_v2_encountermethodname_max_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameMaxFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncountermethodnameMaxFields() {
  return new PokemonV2EncountermethodnameMaxFieldsModelSelector()
}

export const pokemonV2EncountermethodnameMaxFieldsModelPrimitives = selectFromPokemonV2EncountermethodnameMaxFields().encounter_method_id.language_id.name

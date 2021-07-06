/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameMinFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncountermethodnameMinFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_min_fields"), "pokemon_v2_encountermethodname_min_fields"),
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

export class PokemonV2EncountermethodnameMinFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncountermethodnameMinFields() {
  return new PokemonV2EncountermethodnameMinFieldsModelSelector()
}

export const pokemonV2EncountermethodnameMinFieldsModelPrimitives = selectFromPokemonV2EncountermethodnameMinFields().encounter_method_id.language_id.name

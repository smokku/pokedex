/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameMinFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionvaluenameMinFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluenameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename_min_fields"), "pokemon_v2_encounterconditionvaluename_min_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameMinFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncounterconditionvaluenameMinFields() {
  return new PokemonV2EncounterconditionvaluenameMinFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluenameMinFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluenameMinFields().encounter_condition_value_id.language_id.name

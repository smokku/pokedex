/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameAvgFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionvaluenameAvgFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluenameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename_avg_fields"), "pokemon_v2_encounterconditionvaluename_avg_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionvaluenameAvgFields() {
  return new PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluenameAvgFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluenameAvgFields().encounter_condition_value_id.language_id

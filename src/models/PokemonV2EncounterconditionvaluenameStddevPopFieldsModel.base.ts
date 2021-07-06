/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionvaluenameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluenameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename_stddev_pop_fields"), "pokemon_v2_encounterconditionvaluename_stddev_pop_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionvaluenameStddevPopFields() {
  return new PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluenameStddevPopFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluenameStddevPopFields().encounter_condition_value_id.language_id

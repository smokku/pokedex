/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapMinFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionvaluemapMinFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_min_fields"), "pokemon_v2_encounterconditionvaluemap_min_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.integer),
    encounter_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapMinFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvaluemapMinFields() {
  return new PokemonV2EncounterconditionvaluemapMinFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapMinFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapMinFields().encounter_condition_value_id.encounter_id

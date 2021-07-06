/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapMaxFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionvaluemapMaxFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_max_fields"), "pokemon_v2_encounterconditionvaluemap_max_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.integer),
    encounter_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvaluemapMaxFields() {
  return new PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapMaxFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapMaxFields().encounter_condition_value_id.encounter_id

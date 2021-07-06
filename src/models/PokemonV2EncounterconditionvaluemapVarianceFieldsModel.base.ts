/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapVarianceFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionvaluemapVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_variance_fields"), "pokemon_v2_encounterconditionvaluemap_variance_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    encounter_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvaluemapVarianceFields() {
  return new PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapVarianceFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapVarianceFields().encounter_condition_value_id.encounter_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapStddevPopFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionvaluemapStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_stddev_pop_fields"), "pokemon_v2_encounterconditionvaluemap_stddev_pop_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    encounter_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvaluemapStddevPopFields() {
  return new PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapStddevPopFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapStddevPopFields().encounter_condition_value_id.encounter_id

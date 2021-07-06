/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapStddevFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionvaluemapStddevFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_stddev_fields"), "pokemon_v2_encounterconditionvaluemap_stddev_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.number),
    encounter_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvaluemapStddevFields() {
  return new PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapStddevFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapStddevFields().encounter_condition_value_id.encounter_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueAvgFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionvalueAvgFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_avg_fields"), "pokemon_v2_encounterconditionvalue_avg_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueAvgFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueAvgFields() {
  return new PokemonV2EncounterconditionvalueAvgFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueAvgFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueAvgFields().encounter_condition_id

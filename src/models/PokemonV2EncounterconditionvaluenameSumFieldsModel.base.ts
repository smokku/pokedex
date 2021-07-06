/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameSumFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionvaluenameSumFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename_sum_fields"), "pokemon_v2_encounterconditionvaluename_sum_fields"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameSumFieldsModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionvaluenameSumFields() {
  return new PokemonV2EncounterconditionvaluenameSumFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluenameSumFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluenameSumFields().encounter_condition_value_id.language_id

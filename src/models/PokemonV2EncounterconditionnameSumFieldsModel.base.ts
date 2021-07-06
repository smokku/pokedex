/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameSumFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionnameSumFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname_sum_fields"), "pokemon_v2_encounterconditionname_sum_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameSumFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionnameSumFields() {
  return new PokemonV2EncounterconditionnameSumFieldsModelSelector()
}

export const pokemonV2EncounterconditionnameSumFieldsModelPrimitives = selectFromPokemonV2EncounterconditionnameSumFields().encounter_condition_id.language_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameSumFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EncountermethodnameSumFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_sum_fields"), "pokemon_v2_encountermethodname_sum_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameSumFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncountermethodnameSumFields() {
  return new PokemonV2EncountermethodnameSumFieldsModelSelector()
}

export const pokemonV2EncountermethodnameSumFieldsModelPrimitives = selectFromPokemonV2EncountermethodnameSumFields().encounter_method_id.language_id

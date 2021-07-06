/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturepokeathlonstatMaxFieldsBase
 * auto generated base class for the model PokemonV2NaturepokeathlonstatMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2NaturepokeathlonstatMaxFieldsModelBase = ModelBase
  .named('PokemonV2NaturepokeathlonstatMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturepokeathlonstat_max_fields"), "pokemon_v2_naturepokeathlonstat_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    max_change: types.union(types.undefined, types.null, types.integer),
    nature_id: types.union(types.undefined, types.null, types.integer),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturepokeathlonstatMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get max_change() { return this.__attr(`max_change`) }
  get nature_id() { return this.__attr(`nature_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2NaturepokeathlonstatMaxFields() {
  return new PokemonV2NaturepokeathlonstatMaxFieldsModelSelector()
}

export const pokemonV2NaturepokeathlonstatMaxFieldsModelPrimitives = selectFromPokemonV2NaturepokeathlonstatMaxFields().max_change.nature_id.pokeathlon_stat_id

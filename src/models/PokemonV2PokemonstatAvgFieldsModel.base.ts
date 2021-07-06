/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonstatAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonstatAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonstatAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonstatAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonstat_avg_fields"), "pokemon_v2_pokemonstat_avg_fields"),
    base_stat: types.union(types.undefined, types.null, types.number),
    effort: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonstatAvgFieldsModelSelector extends QueryBuilder {
  get base_stat() { return this.__attr(`base_stat`) }
  get effort() { return this.__attr(`effort`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2PokemonstatAvgFields() {
  return new PokemonV2PokemonstatAvgFieldsModelSelector()
}

export const pokemonV2PokemonstatAvgFieldsModelPrimitives = selectFromPokemonV2PokemonstatAvgFields().base_stat.effort.pokemon_id.stat_id

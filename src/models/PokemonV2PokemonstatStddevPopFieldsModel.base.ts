/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonstatStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonstatStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonstatStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonstatStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonstat_stddev_pop_fields"), "pokemon_v2_pokemonstat_stddev_pop_fields"),
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

export class PokemonV2PokemonstatStddevPopFieldsModelSelector extends QueryBuilder {
  get base_stat() { return this.__attr(`base_stat`) }
  get effort() { return this.__attr(`effort`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2PokemonstatStddevPopFields() {
  return new PokemonV2PokemonstatStddevPopFieldsModelSelector()
}

export const pokemonV2PokemonstatStddevPopFieldsModelPrimitives = selectFromPokemonV2PokemonstatStddevPopFields().base_stat.effort.pokemon_id.stat_id

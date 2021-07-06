/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonstatStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonstatStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonstatStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonstatStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonstat_stddev_fields"), "pokemon_v2_pokemonstat_stddev_fields"),
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

export class PokemonV2PokemonstatStddevFieldsModelSelector extends QueryBuilder {
  get base_stat() { return this.__attr(`base_stat`) }
  get effort() { return this.__attr(`effort`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2PokemonstatStddevFields() {
  return new PokemonV2PokemonstatStddevFieldsModelSelector()
}

export const pokemonV2PokemonstatStddevFieldsModelPrimitives = selectFromPokemonV2PokemonstatStddevFields().base_stat.effort.pokemon_id.stat_id

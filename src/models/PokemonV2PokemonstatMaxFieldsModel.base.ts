/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonstatMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonstatMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonstatMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonstatMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonstat_max_fields"), "pokemon_v2_pokemonstat_max_fields"),
    base_stat: types.union(types.undefined, types.null, types.integer),
    effort: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonstatMaxFieldsModelSelector extends QueryBuilder {
  get base_stat() { return this.__attr(`base_stat`) }
  get effort() { return this.__attr(`effort`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2PokemonstatMaxFields() {
  return new PokemonV2PokemonstatMaxFieldsModelSelector()
}

export const pokemonV2PokemonstatMaxFieldsModelPrimitives = selectFromPokemonV2PokemonstatMaxFields().base_stat.effort.pokemon_id.stat_id

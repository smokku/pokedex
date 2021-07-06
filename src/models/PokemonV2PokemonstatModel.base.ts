/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonstatBase
 * auto generated base class for the model PokemonV2PokemonstatModel.
 *
 * columns and relationships of "pokemon_v2_pokemonstat"
 */
export const PokemonV2PokemonstatModelBase = ModelBase
  .named('PokemonV2Pokemonstat')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonstat"), "pokemon_v2_pokemonstat"),
    base_stat: types.union(types.undefined, types.integer),
    effort: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** An object relationship */
    pokemon_v2_stat: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatModel)),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonstatModelSelector extends QueryBuilder {
  get base_stat() { return this.__attr(`base_stat`) }
  get effort() { return this.__attr(`effort`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_stat(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat`, PokemonV2StatModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonstat() {
  return new PokemonV2PokemonstatModelSelector()
}

export const pokemonV2PokemonstatModelPrimitives = selectFromPokemonV2Pokemonstat().base_stat.effort.pokemon_id.stat_id

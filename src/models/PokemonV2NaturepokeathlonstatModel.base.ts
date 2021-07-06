/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NatureModel, PokemonV2NatureModelType } from "./PokemonV2NatureModel"
import { PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"
import { PokemonV2PokeathlonstatModel, PokemonV2PokeathlonstatModelType } from "./PokemonV2PokeathlonstatModel"
import { PokemonV2PokeathlonstatModelSelector } from "./PokemonV2PokeathlonstatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturepokeathlonstatBase
 * auto generated base class for the model PokemonV2NaturepokeathlonstatModel.
 *
 * columns and relationships of "pokemon_v2_naturepokeathlonstat"
 */
export const PokemonV2NaturepokeathlonstatModelBase = ModelBase
  .named('PokemonV2Naturepokeathlonstat')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturepokeathlonstat"), "pokemon_v2_naturepokeathlonstat"),
    id: types.union(types.undefined, types.integer),
    max_change: types.union(types.undefined, types.integer),
    nature_id: types.union(types.undefined, types.null, types.integer),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_nature: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureModel)),
    /** An object relationship */
    pokemon_v2_pokeathlonstat: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturepokeathlonstatModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get max_change() { return this.__attr(`max_change`) }
  get nature_id() { return this.__attr(`nature_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
  pokemon_v2_nature(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_nature`, PokemonV2NatureModelSelector, builder) }
  pokemon_v2_pokeathlonstat(builder?: string | PokemonV2PokeathlonstatModelSelector | ((selector: PokemonV2PokeathlonstatModelSelector) => PokemonV2PokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat`, PokemonV2PokeathlonstatModelSelector, builder) }
}
export function selectFromPokemonV2Naturepokeathlonstat() {
  return new PokemonV2NaturepokeathlonstatModelSelector()
}

export const pokemonV2NaturepokeathlonstatModelPrimitives = selectFromPokemonV2Naturepokeathlonstat().max_change.nature_id.pokeathlon_stat_id

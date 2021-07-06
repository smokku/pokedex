/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkareaModel, PokemonV2PalparkareaModelType } from "./PokemonV2PalparkareaModel"
import { PokemonV2PalparkareaModelSelector } from "./PokemonV2PalparkareaModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkBase
 * auto generated base class for the model PokemonV2PalparkModel.
 *
 * columns and relationships of "pokemon_v2_palpark"
 */
export const PokemonV2PalparkModelBase = ModelBase
  .named('PokemonV2Palpark')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark"), "pokemon_v2_palpark"),
    base_score: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    pal_park_area_id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_palparkarea: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaModel)),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    rate: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkModelSelector extends QueryBuilder {
  get base_score() { return this.__attr(`base_score`) }
  get id() { return this.__attr(`id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get rate() { return this.__attr(`rate`) }
  pokemon_v2_palparkarea(builder?: string | PokemonV2PalparkareaModelSelector | ((selector: PokemonV2PalparkareaModelSelector) => PokemonV2PalparkareaModelSelector)) { return this.__child(`pokemon_v2_palparkarea`, PokemonV2PalparkareaModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
}
export function selectFromPokemonV2Palpark() {
  return new PokemonV2PalparkModelSelector()
}

export const pokemonV2PalparkModelPrimitives = selectFromPokemonV2Palpark().base_score.pal_park_area_id.pokemon_species_id.rate

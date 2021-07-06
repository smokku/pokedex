/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryModel, PokemonV2BerryModelType } from "./PokemonV2BerryModel"
import { PokemonV2BerryModelSelector } from "./PokemonV2BerryModel.base"
import { PokemonV2BerryflavorModel, PokemonV2BerryflavorModelType } from "./PokemonV2BerryflavorModel"
import { PokemonV2BerryflavorModelSelector } from "./PokemonV2BerryflavorModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapBase
 * auto generated base class for the model PokemonV2BerryflavormapModel.
 *
 * columns and relationships of "pokemon_v2_berryflavormap"
 */
export const PokemonV2BerryflavormapModelBase = ModelBase
  .named('PokemonV2Berryflavormap')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap"), "pokemon_v2_berryflavormap"),
    berry_flavor_id: types.union(types.undefined, types.null, types.integer),
    berry_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemon_v2_berry: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryModel)),
    /** An object relationship */
    pokemon_v2_berryflavor: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorModel)),
    potency: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavormapModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get berry_id() { return this.__attr(`berry_id`) }
  get id() { return this.__attr(`id`) }
  get potency() { return this.__attr(`potency`) }
  pokemon_v2_berry(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berry`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berryflavor(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemon_v2_berryflavor`, PokemonV2BerryflavorModelSelector, builder) }
}
export function selectFromPokemonV2Berryflavormap() {
  return new PokemonV2BerryflavormapModelSelector()
}

export const pokemonV2BerryflavormapModelPrimitives = selectFromPokemonV2Berryflavormap().berry_flavor_id.berry_id.potency

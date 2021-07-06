/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonitemBase
 * auto generated base class for the model PokemonV2PokemonitemModel.
 *
 * columns and relationships of "pokemon_v2_pokemonitem"
 */
export const PokemonV2PokemonitemModelBase = ModelBase
  .named('PokemonV2Pokemonitem')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonitem"), "pokemon_v2_pokemonitem"),
    id: types.union(types.undefined, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_item: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** An object relationship */
    pokemon_v2_version: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionModel)),
    rarity: types.union(types.undefined, types.integer),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonitemModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get rarity() { return this.__attr(`rarity`) }
  get version_id() { return this.__attr(`version_id`) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonitem() {
  return new PokemonV2PokemonitemModelSelector()
}

export const pokemonV2PokemonitemModelPrimitives = selectFromPokemonV2Pokemonitem().item_id.pokemon_id.rarity.version_id

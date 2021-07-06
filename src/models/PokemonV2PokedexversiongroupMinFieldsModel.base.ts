/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupMinFieldsBase
 * auto generated base class for the model PokemonV2PokedexversiongroupMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokedexversiongroupMinFieldsModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_min_fields"), "pokemon_v2_pokedexversiongroup_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokedexversiongroupMinFields() {
  return new PokemonV2PokedexversiongroupMinFieldsModelSelector()
}

export const pokemonV2PokedexversiongroupMinFieldsModelPrimitives = selectFromPokemonV2PokedexversiongroupMinFields().pokedex_id.version_group_id

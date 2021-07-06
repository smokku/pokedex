/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupAvgFieldsBase
 * auto generated base class for the model PokemonV2PokedexversiongroupAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokedexversiongroupAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_avg_fields"), "pokemon_v2_pokedexversiongroup_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokedexversiongroupAvgFields() {
  return new PokemonV2PokedexversiongroupAvgFieldsModelSelector()
}

export const pokemonV2PokedexversiongroupAvgFieldsModelPrimitives = selectFromPokemonV2PokedexversiongroupAvgFields().pokedex_id.version_group_id

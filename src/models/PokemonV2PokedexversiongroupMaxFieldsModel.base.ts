/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupMaxFieldsBase
 * auto generated base class for the model PokemonV2PokedexversiongroupMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexversiongroupMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_max_fields"), "pokemon_v2_pokedexversiongroup_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokedexversiongroupMaxFields() {
  return new PokemonV2PokedexversiongroupMaxFieldsModelSelector()
}

export const pokemonV2PokedexversiongroupMaxFieldsModelPrimitives = selectFromPokemonV2PokedexversiongroupMaxFields().pokedex_id.version_group_id

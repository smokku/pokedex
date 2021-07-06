/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokedexversiongroupVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokedexversiongroupVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_var_pop_fields"), "pokemon_v2_pokedexversiongroup_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokedexversiongroupVarPopFields() {
  return new PokemonV2PokedexversiongroupVarPopFieldsModelSelector()
}

export const pokemonV2PokedexversiongroupVarPopFieldsModelPrimitives = selectFromPokemonV2PokedexversiongroupVarPopFields().pokedex_id.version_group_id

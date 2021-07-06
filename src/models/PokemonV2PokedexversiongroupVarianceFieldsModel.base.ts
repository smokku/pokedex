/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokedexversiongroupVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokedexversiongroupVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_variance_fields"), "pokemon_v2_pokedexversiongroup_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokedexversiongroupVarianceFields() {
  return new PokemonV2PokedexversiongroupVarianceFieldsModelSelector()
}

export const pokemonV2PokedexversiongroupVarianceFieldsModelPrimitives = selectFromPokemonV2PokedexversiongroupVarianceFields().pokedex_id.version_group_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokedexversiongroupStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokedexversiongroupStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_stddev_samp_fields"), "pokemon_v2_pokedexversiongroup_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokedexversiongroupStddevSampFields() {
  return new PokemonV2PokedexversiongroupStddevSampFieldsModelSelector()
}

export const pokemonV2PokedexversiongroupStddevSampFieldsModelPrimitives = selectFromPokemonV2PokedexversiongroupStddevSampFields().pokedex_id.version_group_id

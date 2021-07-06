/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavornameMinFieldsBase
 * auto generated base class for the model PokemonV2BerryflavornameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2BerryflavornameMinFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavornameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavorname_min_fields"), "pokemon_v2_berryflavorname_min_fields"),
    berry_flavor_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavornameMinFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2BerryflavornameMinFields() {
  return new PokemonV2BerryflavornameMinFieldsModelSelector()
}

export const pokemonV2BerryflavornameMinFieldsModelPrimitives = selectFromPokemonV2BerryflavornameMinFields().berry_flavor_id.language_id.name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavornameMaxFieldsBase
 * auto generated base class for the model PokemonV2BerryflavornameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2BerryflavornameMaxFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavornameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavorname_max_fields"), "pokemon_v2_berryflavorname_max_fields"),
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

export class PokemonV2BerryflavornameMaxFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2BerryflavornameMaxFields() {
  return new PokemonV2BerryflavornameMaxFieldsModelSelector()
}

export const pokemonV2BerryflavornameMaxFieldsModelPrimitives = selectFromPokemonV2BerryflavornameMaxFields().berry_flavor_id.language_id.name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavornameVarSampFieldsBase
 * auto generated base class for the model PokemonV2BerryflavornameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryflavornameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavornameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavorname_var_samp_fields"), "pokemon_v2_berryflavorname_var_samp_fields"),
    berry_flavor_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavornameVarSampFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2BerryflavornameVarSampFields() {
  return new PokemonV2BerryflavornameVarSampFieldsModelSelector()
}

export const pokemonV2BerryflavornameVarSampFieldsModelPrimitives = selectFromPokemonV2BerryflavornameVarSampFields().berry_flavor_id.language_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapVarSampFieldsBase
 * auto generated base class for the model PokemonV2BerryflavormapVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryflavormapVarSampFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavormapVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap_var_samp_fields"), "pokemon_v2_berryflavormap_var_samp_fields"),
    berry_flavor_id: types.union(types.undefined, types.null, types.number),
    berry_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    potency: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavormapVarSampFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get berry_id() { return this.__attr(`berry_id`) }
  get id() { return this.__attr(`id`) }
  get potency() { return this.__attr(`potency`) }
}
export function selectFromPokemonV2BerryflavormapVarSampFields() {
  return new PokemonV2BerryflavormapVarSampFieldsModelSelector()
}

export const pokemonV2BerryflavormapVarSampFieldsModelPrimitives = selectFromPokemonV2BerryflavormapVarSampFields().berry_flavor_id.berry_id.potency

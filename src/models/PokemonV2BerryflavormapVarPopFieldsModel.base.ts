/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapVarPopFieldsBase
 * auto generated base class for the model PokemonV2BerryflavormapVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryflavormapVarPopFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavormapVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap_var_pop_fields"), "pokemon_v2_berryflavormap_var_pop_fields"),
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

export class PokemonV2BerryflavormapVarPopFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get berry_id() { return this.__attr(`berry_id`) }
  get id() { return this.__attr(`id`) }
  get potency() { return this.__attr(`potency`) }
}
export function selectFromPokemonV2BerryflavormapVarPopFields() {
  return new PokemonV2BerryflavormapVarPopFieldsModelSelector()
}

export const pokemonV2BerryflavormapVarPopFieldsModelPrimitives = selectFromPokemonV2BerryflavormapVarPopFields().berry_flavor_id.berry_id.potency

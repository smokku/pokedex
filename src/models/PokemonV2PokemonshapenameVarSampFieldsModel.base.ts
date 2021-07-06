/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapenameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonshapenameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapenameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_var_samp_fields"), "pokemon_v2_pokemonshapename_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_shape_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
}
export function selectFromPokemonV2PokemonshapenameVarSampFields() {
  return new PokemonV2PokemonshapenameVarSampFieldsModelSelector()
}

export const pokemonV2PokemonshapenameVarSampFieldsModelPrimitives = selectFromPokemonV2PokemonshapenameVarSampFields().language_id.pokemon_shape_id

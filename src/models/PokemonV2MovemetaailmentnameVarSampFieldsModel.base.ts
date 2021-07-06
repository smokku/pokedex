/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetaailmentnameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_var_samp_fields"), "pokemon_v2_movemetaailmentname_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_meta_ailment_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
}
export function selectFromPokemonV2MovemetaailmentnameVarSampFields() {
  return new PokemonV2MovemetaailmentnameVarSampFieldsModelSelector()
}

export const pokemonV2MovemetaailmentnameVarSampFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentnameVarSampFields().language_id.move_meta_ailment_id

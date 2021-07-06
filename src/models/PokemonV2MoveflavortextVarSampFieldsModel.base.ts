/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextVarSampFieldsBase
 * auto generated base class for the model PokemonV2MoveflavortextVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveflavortextVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MoveflavortextVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_var_samp_fields"), "pokemon_v2_moveflavortext_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveflavortextVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveflavortextVarSampFields() {
  return new PokemonV2MoveflavortextVarSampFieldsModelSelector()
}

export const pokemonV2MoveflavortextVarSampFieldsModelPrimitives = selectFromPokemonV2MoveflavortextVarSampFields().language_id.move_id.version_group_id

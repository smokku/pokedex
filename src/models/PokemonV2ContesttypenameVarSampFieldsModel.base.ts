/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameVarSampFieldsBase
 * auto generated base class for the model PokemonV2ContesttypenameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContesttypenameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypenameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename_var_samp_fields"), "pokemon_v2_contesttypename_var_samp_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameVarSampFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesttypenameVarSampFields() {
  return new PokemonV2ContesttypenameVarSampFieldsModelSelector()
}

export const pokemonV2ContesttypenameVarSampFieldsModelPrimitives = selectFromPokemonV2ContesttypenameVarSampFields().contest_type_id.language_id

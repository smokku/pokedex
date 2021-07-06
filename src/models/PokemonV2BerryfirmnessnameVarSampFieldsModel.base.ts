/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameVarSampFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryfirmnessnameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_var_samp_fields"), "pokemon_v2_berryfirmnessname_var_samp_fields"),
    berry_firmness_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameVarSampFieldsModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2BerryfirmnessnameVarSampFields() {
  return new PokemonV2BerryfirmnessnameVarSampFieldsModelSelector()
}

export const pokemonV2BerryfirmnessnameVarSampFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessnameVarSampFields().berry_firmness_id.language_id

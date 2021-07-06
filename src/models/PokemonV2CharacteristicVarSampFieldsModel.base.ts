/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicVarSampFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2CharacteristicVarSampFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_var_samp_fields"), "pokemon_v2_characteristic_var_samp_fields"),
    gene_mod_5: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicVarSampFieldsModelSelector extends QueryBuilder {
  get gene_mod_5() { return this.__attr(`gene_mod_5`) }
  get id() { return this.__attr(`id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2CharacteristicVarSampFields() {
  return new PokemonV2CharacteristicVarSampFieldsModelSelector()
}

export const pokemonV2CharacteristicVarSampFieldsModelPrimitives = selectFromPokemonV2CharacteristicVarSampFields().gene_mod_5.stat_id

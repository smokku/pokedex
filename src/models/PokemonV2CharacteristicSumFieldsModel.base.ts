/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicSumFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2CharacteristicSumFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_sum_fields"), "pokemon_v2_characteristic_sum_fields"),
    gene_mod_5: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicSumFieldsModelSelector extends QueryBuilder {
  get gene_mod_5() { return this.__attr(`gene_mod_5`) }
  get id() { return this.__attr(`id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2CharacteristicSumFields() {
  return new PokemonV2CharacteristicSumFieldsModelSelector()
}

export const pokemonV2CharacteristicSumFieldsModelPrimitives = selectFromPokemonV2CharacteristicSumFields().gene_mod_5.stat_id

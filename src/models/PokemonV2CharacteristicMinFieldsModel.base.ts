/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicMinFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2CharacteristicMinFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_min_fields"), "pokemon_v2_characteristic_min_fields"),
    gene_mod_5: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicMinFieldsModelSelector extends QueryBuilder {
  get gene_mod_5() { return this.__attr(`gene_mod_5`) }
  get id() { return this.__attr(`id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2CharacteristicMinFields() {
  return new PokemonV2CharacteristicMinFieldsModelSelector()
}

export const pokemonV2CharacteristicMinFieldsModelPrimitives = selectFromPokemonV2CharacteristicMinFields().gene_mod_5.stat_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicMaxFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2CharacteristicMaxFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_max_fields"), "pokemon_v2_characteristic_max_fields"),
    gene_mod_5: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicMaxFieldsModelSelector extends QueryBuilder {
  get gene_mod_5() { return this.__attr(`gene_mod_5`) }
  get id() { return this.__attr(`id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2CharacteristicMaxFields() {
  return new PokemonV2CharacteristicMaxFieldsModelSelector()
}

export const pokemonV2CharacteristicMaxFieldsModelPrimitives = selectFromPokemonV2CharacteristicMaxFields().gene_mod_5.stat_id

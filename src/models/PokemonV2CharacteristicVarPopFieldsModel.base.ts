/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicVarPopFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2CharacteristicVarPopFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_var_pop_fields"), "pokemon_v2_characteristic_var_pop_fields"),
    gene_mod_5: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicVarPopFieldsModelSelector extends QueryBuilder {
  get gene_mod_5() { return this.__attr(`gene_mod_5`) }
  get id() { return this.__attr(`id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2CharacteristicVarPopFields() {
  return new PokemonV2CharacteristicVarPopFieldsModelSelector()
}

export const pokemonV2CharacteristicVarPopFieldsModelPrimitives = selectFromPokemonV2CharacteristicVarPopFields().gene_mod_5.stat_id

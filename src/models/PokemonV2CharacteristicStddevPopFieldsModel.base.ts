/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicStddevPopFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2CharacteristicStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_stddev_pop_fields"), "pokemon_v2_characteristic_stddev_pop_fields"),
    gene_mod_5: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicStddevPopFieldsModelSelector extends QueryBuilder {
  get gene_mod_5() { return this.__attr(`gene_mod_5`) }
  get id() { return this.__attr(`id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2CharacteristicStddevPopFields() {
  return new PokemonV2CharacteristicStddevPopFieldsModelSelector()
}

export const pokemonV2CharacteristicStddevPopFieldsModelPrimitives = selectFromPokemonV2CharacteristicStddevPopFields().gene_mod_5.stat_id

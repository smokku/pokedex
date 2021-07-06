/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonformSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonform_sum_fields"), "pokemon_v2_pokemonform_sum_fields"),
    form_order: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformSumFieldsModelSelector extends QueryBuilder {
  get form_order() { return this.__attr(`form_order`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokemonformSumFields() {
  return new PokemonV2PokemonformSumFieldsModelSelector()
}

export const pokemonV2PokemonformSumFieldsModelPrimitives = selectFromPokemonV2PokemonformSumFields().form_order.order.pokemon_id.version_group_id

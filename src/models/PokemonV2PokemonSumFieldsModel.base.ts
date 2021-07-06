/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemon_sum_fields"), "pokemon_v2_pokemon_sum_fields"),
    base_experience: types.union(types.undefined, types.null, types.integer),
    height: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    weight: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonSumFieldsModelSelector extends QueryBuilder {
  get base_experience() { return this.__attr(`base_experience`) }
  get height() { return this.__attr(`height`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get weight() { return this.__attr(`weight`) }
}
export function selectFromPokemonV2PokemonSumFields() {
  return new PokemonV2PokemonSumFieldsModelSelector()
}

export const pokemonV2PokemonSumFieldsModelPrimitives = selectFromPokemonV2PokemonSumFields().base_experience.height.order.pokemon_species_id.weight

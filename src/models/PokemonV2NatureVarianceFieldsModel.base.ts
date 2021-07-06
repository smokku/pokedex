/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NatureVarianceFieldsBase
 * auto generated base class for the model PokemonV2NatureVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2NatureVarianceFieldsModelBase = ModelBase
  .named('PokemonV2NatureVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_nature_variance_fields"), "pokemon_v2_nature_variance_fields"),
    decreased_stat_id: types.union(types.undefined, types.null, types.number),
    game_index: types.union(types.undefined, types.null, types.number),
    hates_flavor_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    increased_stat_id: types.union(types.undefined, types.null, types.number),
    likes_flavor_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NatureVarianceFieldsModelSelector extends QueryBuilder {
  get decreased_stat_id() { return this.__attr(`decreased_stat_id`) }
  get game_index() { return this.__attr(`game_index`) }
  get hates_flavor_id() { return this.__attr(`hates_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get increased_stat_id() { return this.__attr(`increased_stat_id`) }
  get likes_flavor_id() { return this.__attr(`likes_flavor_id`) }
}
export function selectFromPokemonV2NatureVarianceFields() {
  return new PokemonV2NatureVarianceFieldsModelSelector()
}

export const pokemonV2NatureVarianceFieldsModelPrimitives = selectFromPokemonV2NatureVarianceFields().decreased_stat_id.game_index.hates_flavor_id.increased_stat_id.likes_flavor_id

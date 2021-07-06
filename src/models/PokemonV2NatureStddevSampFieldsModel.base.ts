/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NatureStddevSampFieldsBase
 * auto generated base class for the model PokemonV2NatureStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2NatureStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2NatureStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_nature_stddev_samp_fields"), "pokemon_v2_nature_stddev_samp_fields"),
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

export class PokemonV2NatureStddevSampFieldsModelSelector extends QueryBuilder {
  get decreased_stat_id() { return this.__attr(`decreased_stat_id`) }
  get game_index() { return this.__attr(`game_index`) }
  get hates_flavor_id() { return this.__attr(`hates_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get increased_stat_id() { return this.__attr(`increased_stat_id`) }
  get likes_flavor_id() { return this.__attr(`likes_flavor_id`) }
}
export function selectFromPokemonV2NatureStddevSampFields() {
  return new PokemonV2NatureStddevSampFieldsModelSelector()
}

export const pokemonV2NatureStddevSampFieldsModelPrimitives = selectFromPokemonV2NatureStddevSampFields().decreased_stat_id.game_index.hates_flavor_id.increased_stat_id.likes_flavor_id

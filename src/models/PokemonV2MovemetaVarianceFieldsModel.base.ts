/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovemetaVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetaVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemeta_variance_fields"), "pokemon_v2_movemeta_variance_fields"),
    ailment_chance: types.union(types.undefined, types.null, types.number),
    crit_rate: types.union(types.undefined, types.null, types.number),
    drain: types.union(types.undefined, types.null, types.number),
    flinch_chance: types.union(types.undefined, types.null, types.number),
    healing: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    max_hits: types.union(types.undefined, types.null, types.number),
    max_turns: types.union(types.undefined, types.null, types.number),
    min_hits: types.union(types.undefined, types.null, types.number),
    min_turns: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
    move_meta_ailment_id: types.union(types.undefined, types.null, types.number),
    move_meta_category_id: types.union(types.undefined, types.null, types.number),
    stat_chance: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaVarianceFieldsModelSelector extends QueryBuilder {
  get ailment_chance() { return this.__attr(`ailment_chance`) }
  get crit_rate() { return this.__attr(`crit_rate`) }
  get drain() { return this.__attr(`drain`) }
  get flinch_chance() { return this.__attr(`flinch_chance`) }
  get healing() { return this.__attr(`healing`) }
  get id() { return this.__attr(`id`) }
  get max_hits() { return this.__attr(`max_hits`) }
  get max_turns() { return this.__attr(`max_turns`) }
  get min_hits() { return this.__attr(`min_hits`) }
  get min_turns() { return this.__attr(`min_turns`) }
  get move_id() { return this.__attr(`move_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
  get move_meta_category_id() { return this.__attr(`move_meta_category_id`) }
  get stat_chance() { return this.__attr(`stat_chance`) }
}
export function selectFromPokemonV2MovemetaVarianceFields() {
  return new PokemonV2MovemetaVarianceFieldsModelSelector()
}

export const pokemonV2MovemetaVarianceFieldsModelPrimitives = selectFromPokemonV2MovemetaVarianceFields().ailment_chance.crit_rate.drain.flinch_chance.healing.max_hits.max_turns.min_hits.min_turns.move_id.move_meta_ailment_id.move_meta_category_id.stat_chance

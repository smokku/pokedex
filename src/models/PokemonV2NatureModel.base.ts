/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavorModel, PokemonV2BerryflavorModelType } from "./PokemonV2BerryflavorModel"
import { PokemonV2BerryflavorModelSelector } from "./PokemonV2BerryflavorModel.base"
import { PokemonV2NaturebattlestylepreferenceAggregateModel, PokemonV2NaturebattlestylepreferenceAggregateModelType } from "./PokemonV2NaturebattlestylepreferenceAggregateModel"
import { PokemonV2NaturebattlestylepreferenceAggregateModelSelector } from "./PokemonV2NaturebattlestylepreferenceAggregateModel.base"
import { PokemonV2NaturebattlestylepreferenceModel, PokemonV2NaturebattlestylepreferenceModelType } from "./PokemonV2NaturebattlestylepreferenceModel"
import { PokemonV2NaturebattlestylepreferenceModelSelector } from "./PokemonV2NaturebattlestylepreferenceModel.base"
import { PokemonV2NaturenameAggregateModel, PokemonV2NaturenameAggregateModelType } from "./PokemonV2NaturenameAggregateModel"
import { PokemonV2NaturenameAggregateModelSelector } from "./PokemonV2NaturenameAggregateModel.base"
import { PokemonV2NaturenameModel, PokemonV2NaturenameModelType } from "./PokemonV2NaturenameModel"
import { PokemonV2NaturenameModelSelector } from "./PokemonV2NaturenameModel.base"
import { PokemonV2NaturepokeathlonstatAggregateModel, PokemonV2NaturepokeathlonstatAggregateModelType } from "./PokemonV2NaturepokeathlonstatAggregateModel"
import { PokemonV2NaturepokeathlonstatAggregateModelSelector } from "./PokemonV2NaturepokeathlonstatAggregateModel.base"
import { PokemonV2NaturepokeathlonstatModel, PokemonV2NaturepokeathlonstatModelType } from "./PokemonV2NaturepokeathlonstatModel"
import { PokemonV2NaturepokeathlonstatModelSelector } from "./PokemonV2NaturepokeathlonstatModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NatureBase
 * auto generated base class for the model PokemonV2NatureModel.
 *
 * columns and relationships of "pokemon_v2_nature"
 */
export const PokemonV2NatureModelBase = ModelBase
  .named('PokemonV2Nature')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_nature"), "pokemon_v2_nature"),
    decreased_stat_id: types.union(types.undefined, types.null, types.integer),
    game_index: types.union(types.undefined, types.integer),
    hates_flavor_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    increased_stat_id: types.union(types.undefined, types.null, types.integer),
    likes_flavor_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemonV2BerryflavorByLikesFlavorId: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorModel)),
    /** An object relationship */
    pokemonV2StatByIncreasedStatId: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatModel)),
    /** An object relationship */
    pokemon_v2_berryflavor: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorModel)),
    /** An array relationship */
    pokemon_v2_naturebattlestylepreferences: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturebattlestylepreferenceModel))),
    /** An aggregate relationship */
    pokemon_v2_naturebattlestylepreferences_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturebattlestylepreferenceAggregateModel)),
    /** An array relationship */
    pokemon_v2_naturenames: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturenameModel))),
    /** An aggregate relationship */
    pokemon_v2_naturenames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturenameAggregateModel)),
    /** An array relationship */
    pokemon_v2_naturepokeathlonstats: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturepokeathlonstatModel))),
    /** An aggregate relationship */
    pokemon_v2_naturepokeathlonstats_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturepokeathlonstatAggregateModel)),
    /** An object relationship */
    pokemon_v2_stat: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NatureModelSelector extends QueryBuilder {
  get decreased_stat_id() { return this.__attr(`decreased_stat_id`) }
  get game_index() { return this.__attr(`game_index`) }
  get hates_flavor_id() { return this.__attr(`hates_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get increased_stat_id() { return this.__attr(`increased_stat_id`) }
  get likes_flavor_id() { return this.__attr(`likes_flavor_id`) }
  get name() { return this.__attr(`name`) }
  pokemonV2BerryflavorByLikesFlavorId(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemonV2BerryflavorByLikesFlavorId`, PokemonV2BerryflavorModelSelector, builder) }
  pokemonV2StatByIncreasedStatId(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemonV2StatByIncreasedStatId`, PokemonV2StatModelSelector, builder) }
  pokemon_v2_berryflavor(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemon_v2_berryflavor`, PokemonV2BerryflavorModelSelector, builder) }
  pokemon_v2_naturebattlestylepreferences(builder?: string | PokemonV2NaturebattlestylepreferenceModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceModelSelector) => PokemonV2NaturebattlestylepreferenceModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreferences`, PokemonV2NaturebattlestylepreferenceModelSelector, builder) }
  pokemon_v2_naturebattlestylepreferences_aggregate(builder?: string | PokemonV2NaturebattlestylepreferenceAggregateModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceAggregateModelSelector) => PokemonV2NaturebattlestylepreferenceAggregateModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreferences_aggregate`, PokemonV2NaturebattlestylepreferenceAggregateModelSelector, builder) }
  pokemon_v2_naturenames(builder?: string | PokemonV2NaturenameModelSelector | ((selector: PokemonV2NaturenameModelSelector) => PokemonV2NaturenameModelSelector)) { return this.__child(`pokemon_v2_naturenames`, PokemonV2NaturenameModelSelector, builder) }
  pokemon_v2_naturenames_aggregate(builder?: string | PokemonV2NaturenameAggregateModelSelector | ((selector: PokemonV2NaturenameAggregateModelSelector) => PokemonV2NaturenameAggregateModelSelector)) { return this.__child(`pokemon_v2_naturenames_aggregate`, PokemonV2NaturenameAggregateModelSelector, builder) }
  pokemon_v2_naturepokeathlonstats(builder?: string | PokemonV2NaturepokeathlonstatModelSelector | ((selector: PokemonV2NaturepokeathlonstatModelSelector) => PokemonV2NaturepokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstats`, PokemonV2NaturepokeathlonstatModelSelector, builder) }
  pokemon_v2_naturepokeathlonstats_aggregate(builder?: string | PokemonV2NaturepokeathlonstatAggregateModelSelector | ((selector: PokemonV2NaturepokeathlonstatAggregateModelSelector) => PokemonV2NaturepokeathlonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstats_aggregate`, PokemonV2NaturepokeathlonstatAggregateModelSelector, builder) }
  pokemon_v2_stat(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat`, PokemonV2StatModelSelector, builder) }
}
export function selectFromPokemonV2Nature() {
  return new PokemonV2NatureModelSelector()
}

export const pokemonV2NatureModelPrimitives = selectFromPokemonV2Nature().decreased_stat_id.game_index.hates_flavor_id.increased_stat_id.likes_flavor_id.name

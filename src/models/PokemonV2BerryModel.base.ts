/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryfirmnessModel, PokemonV2BerryfirmnessModelType } from "./PokemonV2BerryfirmnessModel"
import { PokemonV2BerryfirmnessModelSelector } from "./PokemonV2BerryfirmnessModel.base"
import { PokemonV2BerryflavormapAggregateModel, PokemonV2BerryflavormapAggregateModelType } from "./PokemonV2BerryflavormapAggregateModel"
import { PokemonV2BerryflavormapAggregateModelSelector } from "./PokemonV2BerryflavormapAggregateModel.base"
import { PokemonV2BerryflavormapModel, PokemonV2BerryflavormapModelType } from "./PokemonV2BerryflavormapModel"
import { PokemonV2BerryflavormapModelSelector } from "./PokemonV2BerryflavormapModel.base"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryBase
 * auto generated base class for the model PokemonV2BerryModel.
 *
 * columns and relationships of "pokemon_v2_berry"
 */
export const PokemonV2BerryModelBase = ModelBase
  .named('PokemonV2Berry')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berry"), "pokemon_v2_berry"),
    berry_firmness_id: types.union(types.undefined, types.null, types.integer),
    growth_time: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    max_harvest: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    natural_gift_power: types.union(types.undefined, types.integer),
    natural_gift_type_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_berryfirmness: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessModel)),
    /** An array relationship */
    pokemon_v2_berryflavormaps: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavormapModel))),
    /** An aggregate relationship */
    pokemon_v2_berryflavormaps_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryflavormapAggregateModel)),
    /** An object relationship */
    pokemon_v2_item: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    /** An object relationship */
    pokemon_v2_type: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    size: types.union(types.undefined, types.integer),
    smoothness: types.union(types.undefined, types.integer),
    soil_dryness: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get growth_time() { return this.__attr(`growth_time`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get max_harvest() { return this.__attr(`max_harvest`) }
  get name() { return this.__attr(`name`) }
  get natural_gift_power() { return this.__attr(`natural_gift_power`) }
  get natural_gift_type_id() { return this.__attr(`natural_gift_type_id`) }
  get size() { return this.__attr(`size`) }
  get smoothness() { return this.__attr(`smoothness`) }
  get soil_dryness() { return this.__attr(`soil_dryness`) }
  pokemon_v2_berryfirmness(builder?: string | PokemonV2BerryfirmnessModelSelector | ((selector: PokemonV2BerryfirmnessModelSelector) => PokemonV2BerryfirmnessModelSelector)) { return this.__child(`pokemon_v2_berryfirmness`, PokemonV2BerryfirmnessModelSelector, builder) }
  pokemon_v2_berryflavormaps(builder?: string | PokemonV2BerryflavormapModelSelector | ((selector: PokemonV2BerryflavormapModelSelector) => PokemonV2BerryflavormapModelSelector)) { return this.__child(`pokemon_v2_berryflavormaps`, PokemonV2BerryflavormapModelSelector, builder) }
  pokemon_v2_berryflavormaps_aggregate(builder?: string | PokemonV2BerryflavormapAggregateModelSelector | ((selector: PokemonV2BerryflavormapAggregateModelSelector) => PokemonV2BerryflavormapAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavormaps_aggregate`, PokemonV2BerryflavormapAggregateModelSelector, builder) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2Berry() {
  return new PokemonV2BerryModelSelector()
}

export const pokemonV2BerryModelPrimitives = selectFromPokemonV2Berry().berry_firmness_id.growth_time.item_id.max_harvest.name.natural_gift_power.natural_gift_type_id.size.smoothness.soil_dryness

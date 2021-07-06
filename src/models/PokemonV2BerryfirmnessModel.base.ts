/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryAggregateModel, PokemonV2BerryAggregateModelType } from "./PokemonV2BerryAggregateModel"
import { PokemonV2BerryAggregateModelSelector } from "./PokemonV2BerryAggregateModel.base"
import { PokemonV2BerryModel, PokemonV2BerryModelType } from "./PokemonV2BerryModel"
import { PokemonV2BerryModelSelector } from "./PokemonV2BerryModel.base"
import { PokemonV2BerryfirmnessnameAggregateModel, PokemonV2BerryfirmnessnameAggregateModelType } from "./PokemonV2BerryfirmnessnameAggregateModel"
import { PokemonV2BerryfirmnessnameAggregateModelSelector } from "./PokemonV2BerryfirmnessnameAggregateModel.base"
import { PokemonV2BerryfirmnessnameModel, PokemonV2BerryfirmnessnameModelType } from "./PokemonV2BerryfirmnessnameModel"
import { PokemonV2BerryfirmnessnameModelSelector } from "./PokemonV2BerryfirmnessnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessBase
 * auto generated base class for the model PokemonV2BerryfirmnessModel.
 *
 * columns and relationships of "pokemon_v2_berryfirmness"
 */
export const PokemonV2BerryfirmnessModelBase = ModelBase
  .named('PokemonV2Berryfirmness')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness"), "pokemon_v2_berryfirmness"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_berries: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryModel))),
    /** An aggregate relationship */
    pokemon_v2_berries_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryAggregateModel)),
    /** An array relationship */
    pokemon_v2_berryfirmnessnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryfirmnessnameModel))),
    /** An aggregate relationship */
    pokemon_v2_berryfirmnessnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryfirmnessnameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_berries(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berries`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berries_aggregate(builder?: string | PokemonV2BerryAggregateModelSelector | ((selector: PokemonV2BerryAggregateModelSelector) => PokemonV2BerryAggregateModelSelector)) { return this.__child(`pokemon_v2_berries_aggregate`, PokemonV2BerryAggregateModelSelector, builder) }
  pokemon_v2_berryfirmnessnames(builder?: string | PokemonV2BerryfirmnessnameModelSelector | ((selector: PokemonV2BerryfirmnessnameModelSelector) => PokemonV2BerryfirmnessnameModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessnames`, PokemonV2BerryfirmnessnameModelSelector, builder) }
  pokemon_v2_berryfirmnessnames_aggregate(builder?: string | PokemonV2BerryfirmnessnameAggregateModelSelector | ((selector: PokemonV2BerryfirmnessnameAggregateModelSelector) => PokemonV2BerryfirmnessnameAggregateModelSelector)) { return this.__child(`pokemon_v2_berryfirmnessnames_aggregate`, PokemonV2BerryfirmnessnameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Berryfirmness() {
  return new PokemonV2BerryfirmnessModelSelector()
}

export const pokemonV2BerryfirmnessModelPrimitives = selectFromPokemonV2Berryfirmness().name

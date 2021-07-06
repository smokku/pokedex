/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkAggregateModel, PokemonV2PalparkAggregateModelType } from "./PokemonV2PalparkAggregateModel"
import { PokemonV2PalparkAggregateModelSelector } from "./PokemonV2PalparkAggregateModel.base"
import { PokemonV2PalparkModel, PokemonV2PalparkModelType } from "./PokemonV2PalparkModel"
import { PokemonV2PalparkModelSelector } from "./PokemonV2PalparkModel.base"
import { PokemonV2PalparkareanameAggregateModel, PokemonV2PalparkareanameAggregateModelType } from "./PokemonV2PalparkareanameAggregateModel"
import { PokemonV2PalparkareanameAggregateModelSelector } from "./PokemonV2PalparkareanameAggregateModel.base"
import { PokemonV2PalparkareanameModel, PokemonV2PalparkareanameModelType } from "./PokemonV2PalparkareanameModel"
import { PokemonV2PalparkareanameModelSelector } from "./PokemonV2PalparkareanameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaBase
 * auto generated base class for the model PokemonV2PalparkareaModel.
 *
 * columns and relationships of "pokemon_v2_palparkarea"
 */
export const PokemonV2PalparkareaModelBase = ModelBase
  .named('PokemonV2Palparkarea')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea"), "pokemon_v2_palparkarea"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_palparkareanames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkareanameModel))),
    /** An aggregate relationship */
    pokemon_v2_palparkareanames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PalparkareanameAggregateModel)),
    /** An array relationship */
    pokemon_v2_palparks: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkModel))),
    /** An aggregate relationship */
    pokemon_v2_palparks_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PalparkAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_palparkareanames(builder?: string | PokemonV2PalparkareanameModelSelector | ((selector: PokemonV2PalparkareanameModelSelector) => PokemonV2PalparkareanameModelSelector)) { return this.__child(`pokemon_v2_palparkareanames`, PokemonV2PalparkareanameModelSelector, builder) }
  pokemon_v2_palparkareanames_aggregate(builder?: string | PokemonV2PalparkareanameAggregateModelSelector | ((selector: PokemonV2PalparkareanameAggregateModelSelector) => PokemonV2PalparkareanameAggregateModelSelector)) { return this.__child(`pokemon_v2_palparkareanames_aggregate`, PokemonV2PalparkareanameAggregateModelSelector, builder) }
  pokemon_v2_palparks(builder?: string | PokemonV2PalparkModelSelector | ((selector: PokemonV2PalparkModelSelector) => PokemonV2PalparkModelSelector)) { return this.__child(`pokemon_v2_palparks`, PokemonV2PalparkModelSelector, builder) }
  pokemon_v2_palparks_aggregate(builder?: string | PokemonV2PalparkAggregateModelSelector | ((selector: PokemonV2PalparkAggregateModelSelector) => PokemonV2PalparkAggregateModelSelector)) { return this.__child(`pokemon_v2_palparks_aggregate`, PokemonV2PalparkAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Palparkarea() {
  return new PokemonV2PalparkareaModelSelector()
}

export const pokemonV2PalparkareaModelPrimitives = selectFromPokemonV2Palparkarea().name

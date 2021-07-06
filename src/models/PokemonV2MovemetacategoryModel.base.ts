/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaAggregateModel, PokemonV2MovemetaAggregateModelType } from "./PokemonV2MovemetaAggregateModel"
import { PokemonV2MovemetaAggregateModelSelector } from "./PokemonV2MovemetaAggregateModel.base"
import { PokemonV2MovemetaModel, PokemonV2MovemetaModelType } from "./PokemonV2MovemetaModel"
import { PokemonV2MovemetaModelSelector } from "./PokemonV2MovemetaModel.base"
import { PokemonV2MovemetacategorydescriptionAggregateModel, PokemonV2MovemetacategorydescriptionAggregateModelType } from "./PokemonV2MovemetacategorydescriptionAggregateModel"
import { PokemonV2MovemetacategorydescriptionAggregateModelSelector } from "./PokemonV2MovemetacategorydescriptionAggregateModel.base"
import { PokemonV2MovemetacategorydescriptionModel, PokemonV2MovemetacategorydescriptionModelType } from "./PokemonV2MovemetacategorydescriptionModel"
import { PokemonV2MovemetacategorydescriptionModelSelector } from "./PokemonV2MovemetacategorydescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategoryBase
 * auto generated base class for the model PokemonV2MovemetacategoryModel.
 *
 * columns and relationships of "pokemon_v2_movemetacategory"
 */
export const PokemonV2MovemetacategoryModelBase = ModelBase
  .named('PokemonV2Movemetacategory')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategory"), "pokemon_v2_movemetacategory"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_movemeta: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaModel))),
    /** An aggregate relationship */
    pokemon_v2_movemeta_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetaAggregateModel)),
    /** An array relationship */
    pokemon_v2_movemetacategorydescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetacategorydescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_movemetacategorydescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetacategorydescriptionAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategoryModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_movemeta(builder?: string | PokemonV2MovemetaModelSelector | ((selector: PokemonV2MovemetaModelSelector) => PokemonV2MovemetaModelSelector)) { return this.__child(`pokemon_v2_movemeta`, PokemonV2MovemetaModelSelector, builder) }
  pokemon_v2_movemeta_aggregate(builder?: string | PokemonV2MovemetaAggregateModelSelector | ((selector: PokemonV2MovemetaAggregateModelSelector) => PokemonV2MovemetaAggregateModelSelector)) { return this.__child(`pokemon_v2_movemeta_aggregate`, PokemonV2MovemetaAggregateModelSelector, builder) }
  pokemon_v2_movemetacategorydescriptions(builder?: string | PokemonV2MovemetacategorydescriptionModelSelector | ((selector: PokemonV2MovemetacategorydescriptionModelSelector) => PokemonV2MovemetacategorydescriptionModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescriptions`, PokemonV2MovemetacategorydescriptionModelSelector, builder) }
  pokemon_v2_movemetacategorydescriptions_aggregate(builder?: string | PokemonV2MovemetacategorydescriptionAggregateModelSelector | ((selector: PokemonV2MovemetacategorydescriptionAggregateModelSelector) => PokemonV2MovemetacategorydescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetacategorydescriptions_aggregate`, PokemonV2MovemetacategorydescriptionAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Movemetacategory() {
  return new PokemonV2MovemetacategoryModelSelector()
}

export const pokemonV2MovemetacategoryModelPrimitives = selectFromPokemonV2Movemetacategory().name

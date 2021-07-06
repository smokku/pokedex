/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonevolutionAggregateModel, PokemonV2PokemonevolutionAggregateModelType } from "./PokemonV2PokemonevolutionAggregateModel"
import { PokemonV2PokemonevolutionAggregateModelSelector } from "./PokemonV2PokemonevolutionAggregateModel.base"
import { PokemonV2PokemonevolutionModel, PokemonV2PokemonevolutionModelType } from "./PokemonV2PokemonevolutionModel"
import { PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderBase
 * auto generated base class for the model PokemonV2GenderModel.
 *
 * columns and relationships of "pokemon_v2_gender"
 */
export const PokemonV2GenderModelBase = ModelBase
  .named('PokemonV2Gender')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender"), "pokemon_v2_gender"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_pokemonevolutions: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonevolutions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_pokemonevolutions(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolutions_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Gender() {
  return new PokemonV2GenderModelSelector()
}

export const pokemonV2GenderModelPrimitives = selectFromPokemonV2Gender().name

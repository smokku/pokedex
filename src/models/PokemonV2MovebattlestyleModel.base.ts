/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovebattlestylenameAggregateModel, PokemonV2MovebattlestylenameAggregateModelType } from "./PokemonV2MovebattlestylenameAggregateModel"
import { PokemonV2MovebattlestylenameAggregateModelSelector } from "./PokemonV2MovebattlestylenameAggregateModel.base"
import { PokemonV2MovebattlestylenameModel, PokemonV2MovebattlestylenameModelType } from "./PokemonV2MovebattlestylenameModel"
import { PokemonV2MovebattlestylenameModelSelector } from "./PokemonV2MovebattlestylenameModel.base"
import { PokemonV2NaturebattlestylepreferenceAggregateModel, PokemonV2NaturebattlestylepreferenceAggregateModelType } from "./PokemonV2NaturebattlestylepreferenceAggregateModel"
import { PokemonV2NaturebattlestylepreferenceAggregateModelSelector } from "./PokemonV2NaturebattlestylepreferenceAggregateModel.base"
import { PokemonV2NaturebattlestylepreferenceModel, PokemonV2NaturebattlestylepreferenceModelType } from "./PokemonV2NaturebattlestylepreferenceModel"
import { PokemonV2NaturebattlestylepreferenceModelSelector } from "./PokemonV2NaturebattlestylepreferenceModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleBase
 * auto generated base class for the model PokemonV2MovebattlestyleModel.
 *
 * columns and relationships of "pokemon_v2_movebattlestyle"
 */
export const PokemonV2MovebattlestyleModelBase = ModelBase
  .named('PokemonV2Movebattlestyle')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle"), "pokemon_v2_movebattlestyle"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_movebattlestylenames: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovebattlestylenameModel))),
    /** An aggregate relationship */
    pokemon_v2_movebattlestylenames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovebattlestylenameAggregateModel)),
    /** An array relationship */
    pokemon_v2_naturebattlestylepreferences: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturebattlestylepreferenceModel))),
    /** An aggregate relationship */
    pokemon_v2_naturebattlestylepreferences_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturebattlestylepreferenceAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_movebattlestylenames(builder?: string | PokemonV2MovebattlestylenameModelSelector | ((selector: PokemonV2MovebattlestylenameModelSelector) => PokemonV2MovebattlestylenameModelSelector)) { return this.__child(`pokemon_v2_movebattlestylenames`, PokemonV2MovebattlestylenameModelSelector, builder) }
  pokemon_v2_movebattlestylenames_aggregate(builder?: string | PokemonV2MovebattlestylenameAggregateModelSelector | ((selector: PokemonV2MovebattlestylenameAggregateModelSelector) => PokemonV2MovebattlestylenameAggregateModelSelector)) { return this.__child(`pokemon_v2_movebattlestylenames_aggregate`, PokemonV2MovebattlestylenameAggregateModelSelector, builder) }
  pokemon_v2_naturebattlestylepreferences(builder?: string | PokemonV2NaturebattlestylepreferenceModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceModelSelector) => PokemonV2NaturebattlestylepreferenceModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreferences`, PokemonV2NaturebattlestylepreferenceModelSelector, builder) }
  pokemon_v2_naturebattlestylepreferences_aggregate(builder?: string | PokemonV2NaturebattlestylepreferenceAggregateModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceAggregateModelSelector) => PokemonV2NaturebattlestylepreferenceAggregateModelSelector)) { return this.__child(`pokemon_v2_naturebattlestylepreferences_aggregate`, PokemonV2NaturebattlestylepreferenceAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Movebattlestyle() {
  return new PokemonV2MovebattlestyleModelSelector()
}

export const pokemonV2MovebattlestyleModelPrimitives = selectFromPokemonV2Movebattlestyle().name

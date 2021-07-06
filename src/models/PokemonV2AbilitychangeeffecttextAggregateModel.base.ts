/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitychangeeffecttextAggregateFieldsModel, PokemonV2AbilitychangeeffecttextAggregateFieldsModelType } from "./PokemonV2AbilitychangeeffecttextAggregateFieldsModel"
import { PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextAggregateFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextModel, PokemonV2AbilitychangeeffecttextModelType } from "./PokemonV2AbilitychangeeffecttextModel"
import { PokemonV2AbilitychangeeffecttextModelSelector } from "./PokemonV2AbilitychangeeffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextAggregateBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_abilitychangeeffecttext"
 */
export const PokemonV2AbilitychangeeffecttextAggregateModelBase = ModelBase
  .named('PokemonV2AbilitychangeeffecttextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext_aggregate"), "pokemon_v2_abilitychangeeffecttext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitychangeeffecttextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector) => PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2AbilitychangeeffecttextModelSelector | ((selector: PokemonV2AbilitychangeeffecttextModelSelector) => PokemonV2AbilitychangeeffecttextModelSelector)) { return this.__child(`nodes`, PokemonV2AbilitychangeeffecttextModelSelector, builder) }
}
export function selectFromPokemonV2AbilitychangeeffecttextAggregate() {
  return new PokemonV2AbilitychangeeffecttextAggregateModelSelector()
}

export const pokemonV2AbilitychangeeffecttextAggregateModelPrimitives = selectFromPokemonV2AbilitychangeeffecttextAggregate()

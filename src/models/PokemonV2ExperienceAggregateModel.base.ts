/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ExperienceAggregateFieldsModel, PokemonV2ExperienceAggregateFieldsModelType } from "./PokemonV2ExperienceAggregateFieldsModel"
import { PokemonV2ExperienceAggregateFieldsModelSelector } from "./PokemonV2ExperienceAggregateFieldsModel.base"
import { PokemonV2ExperienceModel, PokemonV2ExperienceModelType } from "./PokemonV2ExperienceModel"
import { PokemonV2ExperienceModelSelector } from "./PokemonV2ExperienceModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceAggregateBase
 * auto generated base class for the model PokemonV2ExperienceAggregateModel.
 *
 * aggregated selection of "pokemon_v2_experience"
 */
export const PokemonV2ExperienceAggregateModelBase = ModelBase
  .named('PokemonV2ExperienceAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_aggregate"), "pokemon_v2_experience_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ExperienceModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ExperienceAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ExperienceAggregateFieldsModelSelector | ((selector: PokemonV2ExperienceAggregateFieldsModelSelector) => PokemonV2ExperienceAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ExperienceAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ExperienceModelSelector | ((selector: PokemonV2ExperienceModelSelector) => PokemonV2ExperienceModelSelector)) { return this.__child(`nodes`, PokemonV2ExperienceModelSelector, builder) }
}
export function selectFromPokemonV2ExperienceAggregate() {
  return new PokemonV2ExperienceAggregateModelSelector()
}

export const pokemonV2ExperienceAggregateModelPrimitives = selectFromPokemonV2ExperienceAggregate()

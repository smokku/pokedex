/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitynameAggregateFieldsModel, PokemonV2AbilitynameAggregateFieldsModelType } from "./PokemonV2AbilitynameAggregateFieldsModel"
import { PokemonV2AbilitynameAggregateFieldsModelSelector } from "./PokemonV2AbilitynameAggregateFieldsModel.base"
import { PokemonV2AbilitynameModel, PokemonV2AbilitynameModelType } from "./PokemonV2AbilitynameModel"
import { PokemonV2AbilitynameModelSelector } from "./PokemonV2AbilitynameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitynameAggregateBase
 * auto generated base class for the model PokemonV2AbilitynameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_abilityname"
 */
export const PokemonV2AbilitynameAggregateModelBase = ModelBase
  .named('PokemonV2AbilitynameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityname_aggregate"), "pokemon_v2_abilityname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitynameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitynameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2AbilitynameAggregateFieldsModelSelector | ((selector: PokemonV2AbilitynameAggregateFieldsModelSelector) => PokemonV2AbilitynameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2AbilitynameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2AbilitynameModelSelector | ((selector: PokemonV2AbilitynameModelSelector) => PokemonV2AbilitynameModelSelector)) { return this.__child(`nodes`, PokemonV2AbilitynameModelSelector, builder) }
}
export function selectFromPokemonV2AbilitynameAggregate() {
  return new PokemonV2AbilitynameAggregateModelSelector()
}

export const pokemonV2AbilitynameAggregateModelPrimitives = selectFromPokemonV2AbilitynameAggregate()

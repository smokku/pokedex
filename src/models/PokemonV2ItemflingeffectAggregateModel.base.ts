/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemflingeffectAggregateFieldsModel, PokemonV2ItemflingeffectAggregateFieldsModelType } from "./PokemonV2ItemflingeffectAggregateFieldsModel"
import { PokemonV2ItemflingeffectAggregateFieldsModelSelector } from "./PokemonV2ItemflingeffectAggregateFieldsModel.base"
import { PokemonV2ItemflingeffectModel, PokemonV2ItemflingeffectModelType } from "./PokemonV2ItemflingeffectModel"
import { PokemonV2ItemflingeffectModelSelector } from "./PokemonV2ItemflingeffectModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectAggregateBase
 * auto generated base class for the model PokemonV2ItemflingeffectAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemflingeffect"
 */
export const PokemonV2ItemflingeffectAggregateModelBase = ModelBase
  .named('PokemonV2ItemflingeffectAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_aggregate"), "pokemon_v2_itemflingeffect_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflingeffectModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemflingeffectAggregateFieldsModelSelector | ((selector: PokemonV2ItemflingeffectAggregateFieldsModelSelector) => PokemonV2ItemflingeffectAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemflingeffectAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemflingeffectModelSelector | ((selector: PokemonV2ItemflingeffectModelSelector) => PokemonV2ItemflingeffectModelSelector)) { return this.__child(`nodes`, PokemonV2ItemflingeffectModelSelector, builder) }
}
export function selectFromPokemonV2ItemflingeffectAggregate() {
  return new PokemonV2ItemflingeffectAggregateModelSelector()
}

export const pokemonV2ItemflingeffectAggregateModelPrimitives = selectFromPokemonV2ItemflingeffectAggregate()

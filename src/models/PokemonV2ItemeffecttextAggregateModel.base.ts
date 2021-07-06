/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemeffecttextAggregateFieldsModel, PokemonV2ItemeffecttextAggregateFieldsModelType } from "./PokemonV2ItemeffecttextAggregateFieldsModel"
import { PokemonV2ItemeffecttextAggregateFieldsModelSelector } from "./PokemonV2ItemeffecttextAggregateFieldsModel.base"
import { PokemonV2ItemeffecttextModel, PokemonV2ItemeffecttextModelType } from "./PokemonV2ItemeffecttextModel"
import { PokemonV2ItemeffecttextModelSelector } from "./PokemonV2ItemeffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextAggregateBase
 * auto generated base class for the model PokemonV2ItemeffecttextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemeffecttext"
 */
export const PokemonV2ItemeffecttextAggregateModelBase = ModelBase
  .named('PokemonV2ItemeffecttextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext_aggregate"), "pokemon_v2_itemeffecttext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemeffecttextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemeffecttextAggregateFieldsModelSelector | ((selector: PokemonV2ItemeffecttextAggregateFieldsModelSelector) => PokemonV2ItemeffecttextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemeffecttextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemeffecttextModelSelector | ((selector: PokemonV2ItemeffecttextModelSelector) => PokemonV2ItemeffecttextModelSelector)) { return this.__child(`nodes`, PokemonV2ItemeffecttextModelSelector, builder) }
}
export function selectFromPokemonV2ItemeffecttextAggregate() {
  return new PokemonV2ItemeffecttextAggregateModelSelector()
}

export const pokemonV2ItemeffecttextAggregateModelPrimitives = selectFromPokemonV2ItemeffecttextAggregate()

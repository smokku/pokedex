/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaailmentnameAggregateFieldsModel, PokemonV2MovemetaailmentnameAggregateFieldsModelType } from "./PokemonV2MovemetaailmentnameAggregateFieldsModel"
import { PokemonV2MovemetaailmentnameAggregateFieldsModelSelector } from "./PokemonV2MovemetaailmentnameAggregateFieldsModel.base"
import { PokemonV2MovemetaailmentnameModel, PokemonV2MovemetaailmentnameModelType } from "./PokemonV2MovemetaailmentnameModel"
import { PokemonV2MovemetaailmentnameModelSelector } from "./PokemonV2MovemetaailmentnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameAggregateBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movemetaailmentname"
 */
export const PokemonV2MovemetaailmentnameAggregateModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_aggregate"), "pokemon_v2_movemetaailmentname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaailmentnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovemetaailmentnameAggregateFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameAggregateFieldsModelSelector) => PokemonV2MovemetaailmentnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovemetaailmentnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovemetaailmentnameModelSelector | ((selector: PokemonV2MovemetaailmentnameModelSelector) => PokemonV2MovemetaailmentnameModelSelector)) { return this.__child(`nodes`, PokemonV2MovemetaailmentnameModelSelector, builder) }
}
export function selectFromPokemonV2MovemetaailmentnameAggregate() {
  return new PokemonV2MovemetaailmentnameAggregateModelSelector()
}

export const pokemonV2MovemetaailmentnameAggregateModelPrimitives = selectFromPokemonV2MovemetaailmentnameAggregate()

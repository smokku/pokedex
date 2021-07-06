/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributedescriptionAggregateFieldsModel, PokemonV2ItemattributedescriptionAggregateFieldsModelType } from "./PokemonV2ItemattributedescriptionAggregateFieldsModel"
import { PokemonV2ItemattributedescriptionAggregateFieldsModelSelector } from "./PokemonV2ItemattributedescriptionAggregateFieldsModel.base"
import { PokemonV2ItemattributedescriptionModel, PokemonV2ItemattributedescriptionModelType } from "./PokemonV2ItemattributedescriptionModel"
import { PokemonV2ItemattributedescriptionModelSelector } from "./PokemonV2ItemattributedescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributedescriptionAggregateBase
 * auto generated base class for the model PokemonV2ItemattributedescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemattributedescription"
 */
export const PokemonV2ItemattributedescriptionAggregateModelBase = ModelBase
  .named('PokemonV2ItemattributedescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributedescription_aggregate"), "pokemon_v2_itemattributedescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributedescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributedescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemattributedescriptionAggregateFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionAggregateFieldsModelSelector) => PokemonV2ItemattributedescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemattributedescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemattributedescriptionModelSelector | ((selector: PokemonV2ItemattributedescriptionModelSelector) => PokemonV2ItemattributedescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2ItemattributedescriptionModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributedescriptionAggregate() {
  return new PokemonV2ItemattributedescriptionAggregateModelSelector()
}

export const pokemonV2ItemattributedescriptionAggregateModelPrimitives = selectFromPokemonV2ItemattributedescriptionAggregate()

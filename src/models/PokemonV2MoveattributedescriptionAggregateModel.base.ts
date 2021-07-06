/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributedescriptionAggregateFieldsModel, PokemonV2MoveattributedescriptionAggregateFieldsModelType } from "./PokemonV2MoveattributedescriptionAggregateFieldsModel"
import { PokemonV2MoveattributedescriptionAggregateFieldsModelSelector } from "./PokemonV2MoveattributedescriptionAggregateFieldsModel.base"
import { PokemonV2MoveattributedescriptionModel, PokemonV2MoveattributedescriptionModelType } from "./PokemonV2MoveattributedescriptionModel"
import { PokemonV2MoveattributedescriptionModelSelector } from "./PokemonV2MoveattributedescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributedescriptionAggregateBase
 * auto generated base class for the model PokemonV2MoveattributedescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveattributedescription"
 */
export const PokemonV2MoveattributedescriptionAggregateModelBase = ModelBase
  .named('PokemonV2MoveattributedescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributedescription_aggregate"), "pokemon_v2_moveattributedescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributedescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributedescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveattributedescriptionAggregateFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionAggregateFieldsModelSelector) => PokemonV2MoveattributedescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveattributedescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveattributedescriptionModelSelector | ((selector: PokemonV2MoveattributedescriptionModelSelector) => PokemonV2MoveattributedescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2MoveattributedescriptionModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributedescriptionAggregate() {
  return new PokemonV2MoveattributedescriptionAggregateModelSelector()
}

export const pokemonV2MoveattributedescriptionAggregateModelPrimitives = selectFromPokemonV2MoveattributedescriptionAggregate()

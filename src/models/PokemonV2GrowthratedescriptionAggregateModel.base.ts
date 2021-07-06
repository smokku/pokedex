/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GrowthratedescriptionAggregateFieldsModel, PokemonV2GrowthratedescriptionAggregateFieldsModelType } from "./PokemonV2GrowthratedescriptionAggregateFieldsModel"
import { PokemonV2GrowthratedescriptionAggregateFieldsModelSelector } from "./PokemonV2GrowthratedescriptionAggregateFieldsModel.base"
import { PokemonV2GrowthratedescriptionModel, PokemonV2GrowthratedescriptionModelType } from "./PokemonV2GrowthratedescriptionModel"
import { PokemonV2GrowthratedescriptionModelSelector } from "./PokemonV2GrowthratedescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionAggregateBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_growthratedescription"
 */
export const PokemonV2GrowthratedescriptionAggregateModelBase = ModelBase
  .named('PokemonV2GrowthratedescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription_aggregate"), "pokemon_v2_growthratedescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2GrowthratedescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2GrowthratedescriptionAggregateFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionAggregateFieldsModelSelector) => PokemonV2GrowthratedescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2GrowthratedescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2GrowthratedescriptionModelSelector | ((selector: PokemonV2GrowthratedescriptionModelSelector) => PokemonV2GrowthratedescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2GrowthratedescriptionModelSelector, builder) }
}
export function selectFromPokemonV2GrowthratedescriptionAggregate() {
  return new PokemonV2GrowthratedescriptionAggregateModelSelector()
}

export const pokemonV2GrowthratedescriptionAggregateModelPrimitives = selectFromPokemonV2GrowthratedescriptionAggregate()

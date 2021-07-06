/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethoddescriptionAggregateFieldsModel, PokemonV2MovelearnmethoddescriptionAggregateFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionAggregateFieldsModel"
import { PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionAggregateFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionModel, PokemonV2MovelearnmethoddescriptionModelType } from "./PokemonV2MovelearnmethoddescriptionModel"
import { PokemonV2MovelearnmethoddescriptionModelSelector } from "./PokemonV2MovelearnmethoddescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethoddescriptionAggregateBase
 * auto generated base class for the model PokemonV2MovelearnmethoddescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movelearnmethoddescription"
 */
export const PokemonV2MovelearnmethoddescriptionAggregateModelBase = ModelBase
  .named('PokemonV2MovelearnmethoddescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethoddescription_aggregate"), "pokemon_v2_movelearnmethoddescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethoddescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethoddescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovelearnmethoddescriptionModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionModelSelector) => PokemonV2MovelearnmethoddescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2MovelearnmethoddescriptionModelSelector, builder) }
}
export function selectFromPokemonV2MovelearnmethoddescriptionAggregate() {
  return new PokemonV2MovelearnmethoddescriptionAggregateModelSelector()
}

export const pokemonV2MovelearnmethoddescriptionAggregateModelPrimitives = selectFromPokemonV2MovelearnmethoddescriptionAggregate()

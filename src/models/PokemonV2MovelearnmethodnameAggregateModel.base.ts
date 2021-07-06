/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethodnameAggregateFieldsModel, PokemonV2MovelearnmethodnameAggregateFieldsModelType } from "./PokemonV2MovelearnmethodnameAggregateFieldsModel"
import { PokemonV2MovelearnmethodnameAggregateFieldsModelSelector } from "./PokemonV2MovelearnmethodnameAggregateFieldsModel.base"
import { PokemonV2MovelearnmethodnameModel, PokemonV2MovelearnmethodnameModelType } from "./PokemonV2MovelearnmethodnameModel"
import { PokemonV2MovelearnmethodnameModelSelector } from "./PokemonV2MovelearnmethodnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodnameAggregateBase
 * auto generated base class for the model PokemonV2MovelearnmethodnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movelearnmethodname"
 */
export const PokemonV2MovelearnmethodnameAggregateModelBase = ModelBase
  .named('PokemonV2MovelearnmethodnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethodname_aggregate"), "pokemon_v2_movelearnmethodname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethodnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovelearnmethodnameAggregateFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameAggregateFieldsModelSelector) => PokemonV2MovelearnmethodnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovelearnmethodnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovelearnmethodnameModelSelector | ((selector: PokemonV2MovelearnmethodnameModelSelector) => PokemonV2MovelearnmethodnameModelSelector)) { return this.__child(`nodes`, PokemonV2MovelearnmethodnameModelSelector, builder) }
}
export function selectFromPokemonV2MovelearnmethodnameAggregate() {
  return new PokemonV2MovelearnmethodnameAggregateModelSelector()
}

export const pokemonV2MovelearnmethodnameAggregateModelPrimitives = selectFromPokemonV2MovelearnmethodnameAggregate()

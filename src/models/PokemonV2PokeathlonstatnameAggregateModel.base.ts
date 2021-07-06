/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokeathlonstatnameAggregateFieldsModel, PokemonV2PokeathlonstatnameAggregateFieldsModelType } from "./PokemonV2PokeathlonstatnameAggregateFieldsModel"
import { PokemonV2PokeathlonstatnameAggregateFieldsModelSelector } from "./PokemonV2PokeathlonstatnameAggregateFieldsModel.base"
import { PokemonV2PokeathlonstatnameModel, PokemonV2PokeathlonstatnameModelType } from "./PokemonV2PokeathlonstatnameModel"
import { PokemonV2PokeathlonstatnameModelSelector } from "./PokemonV2PokeathlonstatnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameAggregateBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokeathlonstatname"
 */
export const PokemonV2PokeathlonstatnameAggregateModelBase = ModelBase
  .named('PokemonV2PokeathlonstatnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname_aggregate"), "pokemon_v2_pokeathlonstatname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokeathlonstatnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokeathlonstatnameAggregateFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameAggregateFieldsModelSelector) => PokemonV2PokeathlonstatnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokeathlonstatnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokeathlonstatnameModelSelector | ((selector: PokemonV2PokeathlonstatnameModelSelector) => PokemonV2PokeathlonstatnameModelSelector)) { return this.__child(`nodes`, PokemonV2PokeathlonstatnameModelSelector, builder) }
}
export function selectFromPokemonV2PokeathlonstatnameAggregate() {
  return new PokemonV2PokeathlonstatnameAggregateModelSelector()
}

export const pokemonV2PokeathlonstatnameAggregateModelPrimitives = selectFromPokemonV2PokeathlonstatnameAggregate()

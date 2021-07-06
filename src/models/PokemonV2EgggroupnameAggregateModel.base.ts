/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EgggroupnameAggregateFieldsModel, PokemonV2EgggroupnameAggregateFieldsModelType } from "./PokemonV2EgggroupnameAggregateFieldsModel"
import { PokemonV2EgggroupnameAggregateFieldsModelSelector } from "./PokemonV2EgggroupnameAggregateFieldsModel.base"
import { PokemonV2EgggroupnameModel, PokemonV2EgggroupnameModelType } from "./PokemonV2EgggroupnameModel"
import { PokemonV2EgggroupnameModelSelector } from "./PokemonV2EgggroupnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameAggregateBase
 * auto generated base class for the model PokemonV2EgggroupnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_egggroupname"
 */
export const PokemonV2EgggroupnameAggregateModelBase = ModelBase
  .named('PokemonV2EgggroupnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname_aggregate"), "pokemon_v2_egggroupname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EgggroupnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EgggroupnameAggregateFieldsModelSelector | ((selector: PokemonV2EgggroupnameAggregateFieldsModelSelector) => PokemonV2EgggroupnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EgggroupnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EgggroupnameModelSelector | ((selector: PokemonV2EgggroupnameModelSelector) => PokemonV2EgggroupnameModelSelector)) { return this.__child(`nodes`, PokemonV2EgggroupnameModelSelector, builder) }
}
export function selectFromPokemonV2EgggroupnameAggregate() {
  return new PokemonV2EgggroupnameAggregateModelSelector()
}

export const pokemonV2EgggroupnameAggregateModelPrimitives = selectFromPokemonV2EgggroupnameAggregate()

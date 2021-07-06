/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovedamageclassAggregateFieldsModel, PokemonV2MovedamageclassAggregateFieldsModelType } from "./PokemonV2MovedamageclassAggregateFieldsModel"
import { PokemonV2MovedamageclassAggregateFieldsModelSelector } from "./PokemonV2MovedamageclassAggregateFieldsModel.base"
import { PokemonV2MovedamageclassModel, PokemonV2MovedamageclassModelType } from "./PokemonV2MovedamageclassModel"
import { PokemonV2MovedamageclassModelSelector } from "./PokemonV2MovedamageclassModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassAggregateBase
 * auto generated base class for the model PokemonV2MovedamageclassAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movedamageclass"
 */
export const PokemonV2MovedamageclassAggregateModelBase = ModelBase
  .named('PokemonV2MovedamageclassAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_aggregate"), "pokemon_v2_movedamageclass_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovedamageclassAggregateFieldsModelSelector | ((selector: PokemonV2MovedamageclassAggregateFieldsModelSelector) => PokemonV2MovedamageclassAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovedamageclassAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`nodes`, PokemonV2MovedamageclassModelSelector, builder) }
}
export function selectFromPokemonV2MovedamageclassAggregate() {
  return new PokemonV2MovedamageclassAggregateModelSelector()
}

export const pokemonV2MovedamageclassAggregateModelPrimitives = selectFromPokemonV2MovedamageclassAggregate()

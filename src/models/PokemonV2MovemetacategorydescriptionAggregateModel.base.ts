/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetacategorydescriptionAggregateFieldsModel, PokemonV2MovemetacategorydescriptionAggregateFieldsModelType } from "./PokemonV2MovemetacategorydescriptionAggregateFieldsModel"
import { PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionAggregateFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionModel, PokemonV2MovemetacategorydescriptionModelType } from "./PokemonV2MovemetacategorydescriptionModel"
import { PokemonV2MovemetacategorydescriptionModelSelector } from "./PokemonV2MovemetacategorydescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionAggregateBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movemetacategorydescription"
 */
export const PokemonV2MovemetacategorydescriptionAggregateModelBase = ModelBase
  .named('PokemonV2MovemetacategorydescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription_aggregate"), "pokemon_v2_movemetacategorydescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetacategorydescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector) => PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovemetacategorydescriptionModelSelector | ((selector: PokemonV2MovemetacategorydescriptionModelSelector) => PokemonV2MovemetacategorydescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2MovemetacategorydescriptionModelSelector, builder) }
}
export function selectFromPokemonV2MovemetacategorydescriptionAggregate() {
  return new PokemonV2MovemetacategorydescriptionAggregateModelSelector()
}

export const pokemonV2MovemetacategorydescriptionAggregateModelPrimitives = selectFromPokemonV2MovemetacategorydescriptionAggregate()

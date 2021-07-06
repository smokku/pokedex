/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItempocketnameAggregateFieldsModel, PokemonV2ItempocketnameAggregateFieldsModelType } from "./PokemonV2ItempocketnameAggregateFieldsModel"
import { PokemonV2ItempocketnameAggregateFieldsModelSelector } from "./PokemonV2ItempocketnameAggregateFieldsModel.base"
import { PokemonV2ItempocketnameModel, PokemonV2ItempocketnameModelType } from "./PokemonV2ItempocketnameModel"
import { PokemonV2ItempocketnameModelSelector } from "./PokemonV2ItempocketnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameAggregateBase
 * auto generated base class for the model PokemonV2ItempocketnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itempocketname"
 */
export const PokemonV2ItempocketnameAggregateModelBase = ModelBase
  .named('PokemonV2ItempocketnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_aggregate"), "pokemon_v2_itempocketname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItempocketnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItempocketnameAggregateFieldsModelSelector | ((selector: PokemonV2ItempocketnameAggregateFieldsModelSelector) => PokemonV2ItempocketnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItempocketnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItempocketnameModelSelector | ((selector: PokemonV2ItempocketnameModelSelector) => PokemonV2ItempocketnameModelSelector)) { return this.__child(`nodes`, PokemonV2ItempocketnameModelSelector, builder) }
}
export function selectFromPokemonV2ItempocketnameAggregate() {
  return new PokemonV2ItempocketnameAggregateModelSelector()
}

export const pokemonV2ItempocketnameAggregateModelPrimitives = selectFromPokemonV2ItempocketnameAggregate()

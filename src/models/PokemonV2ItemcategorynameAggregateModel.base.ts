/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemcategorynameAggregateFieldsModel, PokemonV2ItemcategorynameAggregateFieldsModelType } from "./PokemonV2ItemcategorynameAggregateFieldsModel"
import { PokemonV2ItemcategorynameAggregateFieldsModelSelector } from "./PokemonV2ItemcategorynameAggregateFieldsModel.base"
import { PokemonV2ItemcategorynameModel, PokemonV2ItemcategorynameModelType } from "./PokemonV2ItemcategorynameModel"
import { PokemonV2ItemcategorynameModelSelector } from "./PokemonV2ItemcategorynameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameAggregateBase
 * auto generated base class for the model PokemonV2ItemcategorynameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemcategoryname"
 */
export const PokemonV2ItemcategorynameAggregateModelBase = ModelBase
  .named('PokemonV2ItemcategorynameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_aggregate"), "pokemon_v2_itemcategoryname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemcategorynameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemcategorynameAggregateFieldsModelSelector | ((selector: PokemonV2ItemcategorynameAggregateFieldsModelSelector) => PokemonV2ItemcategorynameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemcategorynameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemcategorynameModelSelector | ((selector: PokemonV2ItemcategorynameModelSelector) => PokemonV2ItemcategorynameModelSelector)) { return this.__child(`nodes`, PokemonV2ItemcategorynameModelSelector, builder) }
}
export function selectFromPokemonV2ItemcategorynameAggregate() {
  return new PokemonV2ItemcategorynameAggregateModelSelector()
}

export const pokemonV2ItemcategorynameAggregateModelPrimitives = selectFromPokemonV2ItemcategorynameAggregate()

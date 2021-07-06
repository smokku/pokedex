/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguagenameAggregateFieldsModel, PokemonV2LanguagenameAggregateFieldsModelType } from "./PokemonV2LanguagenameAggregateFieldsModel"
import { PokemonV2LanguagenameAggregateFieldsModelSelector } from "./PokemonV2LanguagenameAggregateFieldsModel.base"
import { PokemonV2LanguagenameModel, PokemonV2LanguagenameModelType } from "./PokemonV2LanguagenameModel"
import { PokemonV2LanguagenameModelSelector } from "./PokemonV2LanguagenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguagenameAggregateBase
 * auto generated base class for the model PokemonV2LanguagenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_languagename"
 */
export const PokemonV2LanguagenameAggregateModelBase = ModelBase
  .named('PokemonV2LanguagenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_languagename_aggregate"), "pokemon_v2_languagename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LanguagenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguagenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LanguagenameAggregateFieldsModelSelector | ((selector: PokemonV2LanguagenameAggregateFieldsModelSelector) => PokemonV2LanguagenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LanguagenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LanguagenameModelSelector | ((selector: PokemonV2LanguagenameModelSelector) => PokemonV2LanguagenameModelSelector)) { return this.__child(`nodes`, PokemonV2LanguagenameModelSelector, builder) }
}
export function selectFromPokemonV2LanguagenameAggregate() {
  return new PokemonV2LanguagenameAggregateModelSelector()
}

export const pokemonV2LanguagenameAggregateModelPrimitives = selectFromPokemonV2LanguagenameAggregate()

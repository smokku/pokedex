/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemflingeffecteffecttextAggregateFieldsModel, PokemonV2ItemflingeffecteffecttextAggregateFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextAggregateFieldsModel"
import { PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextAggregateFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextModel, PokemonV2ItemflingeffecteffecttextModelType } from "./PokemonV2ItemflingeffecteffecttextModel"
import { PokemonV2ItemflingeffecteffecttextModelSelector } from "./PokemonV2ItemflingeffecteffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextAggregateBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemflingeffecteffecttext"
 */
export const PokemonV2ItemflingeffecteffecttextAggregateModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_aggregate"), "pokemon_v2_itemflingeffecteffecttext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflingeffecteffecttextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemflingeffecteffecttextModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextModelSelector) => PokemonV2ItemflingeffecteffecttextModelSelector)) { return this.__child(`nodes`, PokemonV2ItemflingeffecteffecttextModelSelector, builder) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextAggregate() {
  return new PokemonV2ItemflingeffecteffecttextAggregateModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextAggregateModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextAggregate()

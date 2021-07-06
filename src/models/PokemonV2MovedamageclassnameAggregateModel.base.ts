/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovedamageclassnameAggregateFieldsModel, PokemonV2MovedamageclassnameAggregateFieldsModelType } from "./PokemonV2MovedamageclassnameAggregateFieldsModel"
import { PokemonV2MovedamageclassnameAggregateFieldsModelSelector } from "./PokemonV2MovedamageclassnameAggregateFieldsModel.base"
import { PokemonV2MovedamageclassnameModel, PokemonV2MovedamageclassnameModelType } from "./PokemonV2MovedamageclassnameModel"
import { PokemonV2MovedamageclassnameModelSelector } from "./PokemonV2MovedamageclassnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassnameAggregateBase
 * auto generated base class for the model PokemonV2MovedamageclassnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movedamageclassname"
 */
export const PokemonV2MovedamageclassnameAggregateModelBase = ModelBase
  .named('PokemonV2MovedamageclassnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassname_aggregate"), "pokemon_v2_movedamageclassname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovedamageclassnameAggregateFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameAggregateFieldsModelSelector) => PokemonV2MovedamageclassnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovedamageclassnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovedamageclassnameModelSelector | ((selector: PokemonV2MovedamageclassnameModelSelector) => PokemonV2MovedamageclassnameModelSelector)) { return this.__child(`nodes`, PokemonV2MovedamageclassnameModelSelector, builder) }
}
export function selectFromPokemonV2MovedamageclassnameAggregate() {
  return new PokemonV2MovedamageclassnameAggregateModelSelector()
}

export const pokemonV2MovedamageclassnameAggregateModelPrimitives = selectFromPokemonV2MovedamageclassnameAggregate()

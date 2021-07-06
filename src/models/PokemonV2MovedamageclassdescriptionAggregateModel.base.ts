/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovedamageclassdescriptionAggregateFieldsModel, PokemonV2MovedamageclassdescriptionAggregateFieldsModelType } from "./PokemonV2MovedamageclassdescriptionAggregateFieldsModel"
import { PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionAggregateFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionModel, PokemonV2MovedamageclassdescriptionModelType } from "./PokemonV2MovedamageclassdescriptionModel"
import { PokemonV2MovedamageclassdescriptionModelSelector } from "./PokemonV2MovedamageclassdescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionAggregateBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movedamageclassdescription"
 */
export const PokemonV2MovedamageclassdescriptionAggregateModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_aggregate"), "pokemon_v2_movedamageclassdescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassdescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector) => PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovedamageclassdescriptionModelSelector | ((selector: PokemonV2MovedamageclassdescriptionModelSelector) => PokemonV2MovedamageclassdescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2MovedamageclassdescriptionModelSelector, builder) }
}
export function selectFromPokemonV2MovedamageclassdescriptionAggregate() {
  return new PokemonV2MovedamageclassdescriptionAggregateModelSelector()
}

export const pokemonV2MovedamageclassdescriptionAggregateModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionAggregate()

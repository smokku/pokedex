/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovetargetdescriptionAggregateFieldsModel, PokemonV2MovetargetdescriptionAggregateFieldsModelType } from "./PokemonV2MovetargetdescriptionAggregateFieldsModel"
import { PokemonV2MovetargetdescriptionAggregateFieldsModelSelector } from "./PokemonV2MovetargetdescriptionAggregateFieldsModel.base"
import { PokemonV2MovetargetdescriptionModel, PokemonV2MovetargetdescriptionModelType } from "./PokemonV2MovetargetdescriptionModel"
import { PokemonV2MovetargetdescriptionModelSelector } from "./PokemonV2MovetargetdescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetdescriptionAggregateBase
 * auto generated base class for the model PokemonV2MovetargetdescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movetargetdescription"
 */
export const PokemonV2MovetargetdescriptionAggregateModelBase = ModelBase
  .named('PokemonV2MovetargetdescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetdescription_aggregate"), "pokemon_v2_movetargetdescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetdescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetdescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovetargetdescriptionAggregateFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionAggregateFieldsModelSelector) => PokemonV2MovetargetdescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovetargetdescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovetargetdescriptionModelSelector | ((selector: PokemonV2MovetargetdescriptionModelSelector) => PokemonV2MovetargetdescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2MovetargetdescriptionModelSelector, builder) }
}
export function selectFromPokemonV2MovetargetdescriptionAggregate() {
  return new PokemonV2MovetargetdescriptionAggregateModelSelector()
}

export const pokemonV2MovetargetdescriptionAggregateModelPrimitives = selectFromPokemonV2MovetargetdescriptionAggregate()

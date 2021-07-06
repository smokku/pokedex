/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonegggroupAggregateFieldsModel, PokemonV2PokemonegggroupAggregateFieldsModelType } from "./PokemonV2PokemonegggroupAggregateFieldsModel"
import { PokemonV2PokemonegggroupAggregateFieldsModelSelector } from "./PokemonV2PokemonegggroupAggregateFieldsModel.base"
import { PokemonV2PokemonegggroupModel, PokemonV2PokemonegggroupModelType } from "./PokemonV2PokemonegggroupModel"
import { PokemonV2PokemonegggroupModelSelector } from "./PokemonV2PokemonegggroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonegggroupAggregateBase
 * auto generated base class for the model PokemonV2PokemonegggroupAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonegggroup"
 */
export const PokemonV2PokemonegggroupAggregateModelBase = ModelBase
  .named('PokemonV2PokemonegggroupAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonegggroup_aggregate"), "pokemon_v2_pokemonegggroup_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonegggroupModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonegggroupAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonegggroupAggregateFieldsModelSelector | ((selector: PokemonV2PokemonegggroupAggregateFieldsModelSelector) => PokemonV2PokemonegggroupAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonegggroupAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonegggroupModelSelector | ((selector: PokemonV2PokemonegggroupModelSelector) => PokemonV2PokemonegggroupModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonegggroupModelSelector, builder) }
}
export function selectFromPokemonV2PokemonegggroupAggregate() {
  return new PokemonV2PokemonegggroupAggregateModelSelector()
}

export const pokemonV2PokemonegggroupAggregateModelPrimitives = selectFromPokemonV2PokemonegggroupAggregate()

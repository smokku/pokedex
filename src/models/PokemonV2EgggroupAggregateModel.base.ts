/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EgggroupAggregateFieldsModel, PokemonV2EgggroupAggregateFieldsModelType } from "./PokemonV2EgggroupAggregateFieldsModel"
import { PokemonV2EgggroupAggregateFieldsModelSelector } from "./PokemonV2EgggroupAggregateFieldsModel.base"
import { PokemonV2EgggroupModel, PokemonV2EgggroupModelType } from "./PokemonV2EgggroupModel"
import { PokemonV2EgggroupModelSelector } from "./PokemonV2EgggroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupAggregateBase
 * auto generated base class for the model PokemonV2EgggroupAggregateModel.
 *
 * aggregated selection of "pokemon_v2_egggroup"
 */
export const PokemonV2EgggroupAggregateModelBase = ModelBase
  .named('PokemonV2EgggroupAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_aggregate"), "pokemon_v2_egggroup_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EgggroupModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EgggroupAggregateFieldsModelSelector | ((selector: PokemonV2EgggroupAggregateFieldsModelSelector) => PokemonV2EgggroupAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EgggroupAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EgggroupModelSelector | ((selector: PokemonV2EgggroupModelSelector) => PokemonV2EgggroupModelSelector)) { return this.__child(`nodes`, PokemonV2EgggroupModelSelector, builder) }
}
export function selectFromPokemonV2EgggroupAggregate() {
  return new PokemonV2EgggroupAggregateModelSelector()
}

export const pokemonV2EgggroupAggregateModelPrimitives = selectFromPokemonV2EgggroupAggregate()

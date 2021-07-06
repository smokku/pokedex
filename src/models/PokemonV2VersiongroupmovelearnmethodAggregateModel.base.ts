/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel, PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodModel, PokemonV2VersiongroupmovelearnmethodModelType } from "./PokemonV2VersiongroupmovelearnmethodModel"
import { PokemonV2VersiongroupmovelearnmethodModelSelector } from "./PokemonV2VersiongroupmovelearnmethodModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodAggregateBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodAggregateModel.
 *
 * aggregated selection of "pokemon_v2_versiongroupmovelearnmethod"
 */
export const PokemonV2VersiongroupmovelearnmethodAggregateModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_aggregate"), "pokemon_v2_versiongroupmovelearnmethod_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupmovelearnmethodModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2VersiongroupmovelearnmethodModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodModelSelector) => PokemonV2VersiongroupmovelearnmethodModelSelector)) { return this.__child(`nodes`, PokemonV2VersiongroupmovelearnmethodModelSelector, builder) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodAggregate() {
  return new PokemonV2VersiongroupmovelearnmethodAggregateModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodAggregateModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodAggregate()

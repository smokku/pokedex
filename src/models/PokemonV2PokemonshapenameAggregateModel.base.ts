/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonshapenameAggregateFieldsModel, PokemonV2PokemonshapenameAggregateFieldsModelType } from "./PokemonV2PokemonshapenameAggregateFieldsModel"
import { PokemonV2PokemonshapenameAggregateFieldsModelSelector } from "./PokemonV2PokemonshapenameAggregateFieldsModel.base"
import { PokemonV2PokemonshapenameModel, PokemonV2PokemonshapenameModelType } from "./PokemonV2PokemonshapenameModel"
import { PokemonV2PokemonshapenameModelSelector } from "./PokemonV2PokemonshapenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameAggregateBase
 * auto generated base class for the model PokemonV2PokemonshapenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonshapename"
 */
export const PokemonV2PokemonshapenameAggregateModelBase = ModelBase
  .named('PokemonV2PokemonshapenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_aggregate"), "pokemon_v2_pokemonshapename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonshapenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonshapenameAggregateFieldsModelSelector | ((selector: PokemonV2PokemonshapenameAggregateFieldsModelSelector) => PokemonV2PokemonshapenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonshapenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonshapenameModelSelector | ((selector: PokemonV2PokemonshapenameModelSelector) => PokemonV2PokemonshapenameModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonshapenameModelSelector, builder) }
}
export function selectFromPokemonV2PokemonshapenameAggregate() {
  return new PokemonV2PokemonshapenameAggregateModelSelector()
}

export const pokemonV2PokemonshapenameAggregateModelPrimitives = selectFromPokemonV2PokemonshapenameAggregate()

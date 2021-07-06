/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvaluenameAggregateFieldsModel, PokemonV2EncounterconditionvaluenameAggregateFieldsModelType } from "./PokemonV2EncounterconditionvaluenameAggregateFieldsModel"
import { PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameAggregateFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameModel, PokemonV2EncounterconditionvaluenameModelType } from "./PokemonV2EncounterconditionvaluenameModel"
import { PokemonV2EncounterconditionvaluenameModelSelector } from "./PokemonV2EncounterconditionvaluenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameAggregateBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encounterconditionvaluename"
 */
export const PokemonV2EncounterconditionvaluenameAggregateModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename_aggregate"), "pokemon_v2_encounterconditionvaluename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvaluenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector) => PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncounterconditionvaluenameModelSelector | ((selector: PokemonV2EncounterconditionvaluenameModelSelector) => PokemonV2EncounterconditionvaluenameModelSelector)) { return this.__child(`nodes`, PokemonV2EncounterconditionvaluenameModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionvaluenameAggregate() {
  return new PokemonV2EncounterconditionvaluenameAggregateModelSelector()
}

export const pokemonV2EncounterconditionvaluenameAggregateModelPrimitives = selectFromPokemonV2EncounterconditionvaluenameAggregate()

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityeffecttextAggregateFieldsModel, PokemonV2AbilityeffecttextAggregateFieldsModelType } from "./PokemonV2AbilityeffecttextAggregateFieldsModel"
import { PokemonV2AbilityeffecttextAggregateFieldsModelSelector } from "./PokemonV2AbilityeffecttextAggregateFieldsModel.base"
import { PokemonV2AbilityeffecttextModel, PokemonV2AbilityeffecttextModelType } from "./PokemonV2AbilityeffecttextModel"
import { PokemonV2AbilityeffecttextModelSelector } from "./PokemonV2AbilityeffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextAggregateBase
 * auto generated base class for the model PokemonV2AbilityeffecttextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_abilityeffecttext"
 */
export const PokemonV2AbilityeffecttextAggregateModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_aggregate"), "pokemon_v2_abilityeffecttext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityeffecttextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2AbilityeffecttextAggregateFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextAggregateFieldsModelSelector) => PokemonV2AbilityeffecttextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2AbilityeffecttextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2AbilityeffecttextModelSelector | ((selector: PokemonV2AbilityeffecttextModelSelector) => PokemonV2AbilityeffecttextModelSelector)) { return this.__child(`nodes`, PokemonV2AbilityeffecttextModelSelector, builder) }
}
export function selectFromPokemonV2AbilityeffecttextAggregate() {
  return new PokemonV2AbilityeffecttextAggregateModelSelector()
}

export const pokemonV2AbilityeffecttextAggregateModelPrimitives = selectFromPokemonV2AbilityeffecttextAggregate()

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2CharacteristicdescriptionAggregateFieldsModel, PokemonV2CharacteristicdescriptionAggregateFieldsModelType } from "./PokemonV2CharacteristicdescriptionAggregateFieldsModel"
import { PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionAggregateFieldsModel.base"
import { PokemonV2CharacteristicdescriptionModel, PokemonV2CharacteristicdescriptionModelType } from "./PokemonV2CharacteristicdescriptionModel"
import { PokemonV2CharacteristicdescriptionModelSelector } from "./PokemonV2CharacteristicdescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionAggregateBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_characteristicdescription"
 */
export const PokemonV2CharacteristicdescriptionAggregateModelBase = ModelBase
  .named('PokemonV2CharacteristicdescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription_aggregate"), "pokemon_v2_characteristicdescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2CharacteristicdescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector) => PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2CharacteristicdescriptionModelSelector | ((selector: PokemonV2CharacteristicdescriptionModelSelector) => PokemonV2CharacteristicdescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2CharacteristicdescriptionModelSelector, builder) }
}
export function selectFromPokemonV2CharacteristicdescriptionAggregate() {
  return new PokemonV2CharacteristicdescriptionAggregateModelSelector()
}

export const pokemonV2CharacteristicdescriptionAggregateModelPrimitives = selectFromPokemonV2CharacteristicdescriptionAggregate()

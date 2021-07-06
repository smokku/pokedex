/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexversiongroupAggregateFieldsModel, PokemonV2PokedexversiongroupAggregateFieldsModelType } from "./PokemonV2PokedexversiongroupAggregateFieldsModel"
import { PokemonV2PokedexversiongroupAggregateFieldsModelSelector } from "./PokemonV2PokedexversiongroupAggregateFieldsModel.base"
import { PokemonV2PokedexversiongroupModel, PokemonV2PokedexversiongroupModelType } from "./PokemonV2PokedexversiongroupModel"
import { PokemonV2PokedexversiongroupModelSelector } from "./PokemonV2PokedexversiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupAggregateBase
 * auto generated base class for the model PokemonV2PokedexversiongroupAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokedexversiongroup"
 */
export const PokemonV2PokedexversiongroupAggregateModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_aggregate"), "pokemon_v2_pokedexversiongroup_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexversiongroupModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokedexversiongroupAggregateFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupAggregateFieldsModelSelector) => PokemonV2PokedexversiongroupAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokedexversiongroupAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokedexversiongroupModelSelector | ((selector: PokemonV2PokedexversiongroupModelSelector) => PokemonV2PokedexversiongroupModelSelector)) { return this.__child(`nodes`, PokemonV2PokedexversiongroupModelSelector, builder) }
}
export function selectFromPokemonV2PokedexversiongroupAggregate() {
  return new PokemonV2PokedexversiongroupAggregateModelSelector()
}

export const pokemonV2PokedexversiongroupAggregateModelPrimitives = selectFromPokemonV2PokedexversiongroupAggregate()

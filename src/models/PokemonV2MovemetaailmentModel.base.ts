/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaAggregateModel, PokemonV2MovemetaAggregateModelType } from "./PokemonV2MovemetaAggregateModel"
import { PokemonV2MovemetaAggregateModelSelector } from "./PokemonV2MovemetaAggregateModel.base"
import { PokemonV2MovemetaModel, PokemonV2MovemetaModelType } from "./PokemonV2MovemetaModel"
import { PokemonV2MovemetaModelSelector } from "./PokemonV2MovemetaModel.base"
import { PokemonV2MovemetaailmentnameAggregateModel, PokemonV2MovemetaailmentnameAggregateModelType } from "./PokemonV2MovemetaailmentnameAggregateModel"
import { PokemonV2MovemetaailmentnameAggregateModelSelector } from "./PokemonV2MovemetaailmentnameAggregateModel.base"
import { PokemonV2MovemetaailmentnameModel, PokemonV2MovemetaailmentnameModelType } from "./PokemonV2MovemetaailmentnameModel"
import { PokemonV2MovemetaailmentnameModelSelector } from "./PokemonV2MovemetaailmentnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentBase
 * auto generated base class for the model PokemonV2MovemetaailmentModel.
 *
 * columns and relationships of "pokemon_v2_movemetaailment"
 */
export const PokemonV2MovemetaailmentModelBase = ModelBase
  .named('PokemonV2Movemetaailment')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment"), "pokemon_v2_movemetaailment"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_movemeta: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaModel))),
    /** An aggregate relationship */
    pokemon_v2_movemeta_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetaAggregateModel)),
    /** An array relationship */
    pokemon_v2_movemetaailmentnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaailmentnameModel))),
    /** An aggregate relationship */
    pokemon_v2_movemetaailmentnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovemetaailmentnameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_movemeta(builder?: string | PokemonV2MovemetaModelSelector | ((selector: PokemonV2MovemetaModelSelector) => PokemonV2MovemetaModelSelector)) { return this.__child(`pokemon_v2_movemeta`, PokemonV2MovemetaModelSelector, builder) }
  pokemon_v2_movemeta_aggregate(builder?: string | PokemonV2MovemetaAggregateModelSelector | ((selector: PokemonV2MovemetaAggregateModelSelector) => PokemonV2MovemetaAggregateModelSelector)) { return this.__child(`pokemon_v2_movemeta_aggregate`, PokemonV2MovemetaAggregateModelSelector, builder) }
  pokemon_v2_movemetaailmentnames(builder?: string | PokemonV2MovemetaailmentnameModelSelector | ((selector: PokemonV2MovemetaailmentnameModelSelector) => PokemonV2MovemetaailmentnameModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentnames`, PokemonV2MovemetaailmentnameModelSelector, builder) }
  pokemon_v2_movemetaailmentnames_aggregate(builder?: string | PokemonV2MovemetaailmentnameAggregateModelSelector | ((selector: PokemonV2MovemetaailmentnameAggregateModelSelector) => PokemonV2MovemetaailmentnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movemetaailmentnames_aggregate`, PokemonV2MovemetaailmentnameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Movemetaailment() {
  return new PokemonV2MovemetaailmentModelSelector()
}

export const pokemonV2MovemetaailmentModelPrimitives = selectFromPokemonV2Movemetaailment().name

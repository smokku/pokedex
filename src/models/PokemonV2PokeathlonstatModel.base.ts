/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NaturepokeathlonstatAggregateModel, PokemonV2NaturepokeathlonstatAggregateModelType } from "./PokemonV2NaturepokeathlonstatAggregateModel"
import { PokemonV2NaturepokeathlonstatAggregateModelSelector } from "./PokemonV2NaturepokeathlonstatAggregateModel.base"
import { PokemonV2NaturepokeathlonstatModel, PokemonV2NaturepokeathlonstatModelType } from "./PokemonV2NaturepokeathlonstatModel"
import { PokemonV2NaturepokeathlonstatModelSelector } from "./PokemonV2NaturepokeathlonstatModel.base"
import { PokemonV2PokeathlonstatnameAggregateModel, PokemonV2PokeathlonstatnameAggregateModelType } from "./PokemonV2PokeathlonstatnameAggregateModel"
import { PokemonV2PokeathlonstatnameAggregateModelSelector } from "./PokemonV2PokeathlonstatnameAggregateModel.base"
import { PokemonV2PokeathlonstatnameModel, PokemonV2PokeathlonstatnameModelType } from "./PokemonV2PokeathlonstatnameModel"
import { PokemonV2PokeathlonstatnameModelSelector } from "./PokemonV2PokeathlonstatnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatBase
 * auto generated base class for the model PokemonV2PokeathlonstatModel.
 *
 * columns and relationships of "pokemon_v2_pokeathlonstat"
 */
export const PokemonV2PokeathlonstatModelBase = ModelBase
  .named('PokemonV2Pokeathlonstat')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat"), "pokemon_v2_pokeathlonstat"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_naturepokeathlonstats: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturepokeathlonstatModel))),
    /** An aggregate relationship */
    pokemon_v2_naturepokeathlonstats_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NaturepokeathlonstatAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokeathlonstatnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokeathlonstatnameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokeathlonstatnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokeathlonstatnameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_naturepokeathlonstats(builder?: string | PokemonV2NaturepokeathlonstatModelSelector | ((selector: PokemonV2NaturepokeathlonstatModelSelector) => PokemonV2NaturepokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstats`, PokemonV2NaturepokeathlonstatModelSelector, builder) }
  pokemon_v2_naturepokeathlonstats_aggregate(builder?: string | PokemonV2NaturepokeathlonstatAggregateModelSelector | ((selector: PokemonV2NaturepokeathlonstatAggregateModelSelector) => PokemonV2NaturepokeathlonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_naturepokeathlonstats_aggregate`, PokemonV2NaturepokeathlonstatAggregateModelSelector, builder) }
  pokemon_v2_pokeathlonstatnames(builder?: string | PokemonV2PokeathlonstatnameModelSelector | ((selector: PokemonV2PokeathlonstatnameModelSelector) => PokemonV2PokeathlonstatnameModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatnames`, PokemonV2PokeathlonstatnameModelSelector, builder) }
  pokemon_v2_pokeathlonstatnames_aggregate(builder?: string | PokemonV2PokeathlonstatnameAggregateModelSelector | ((selector: PokemonV2PokeathlonstatnameAggregateModelSelector) => PokemonV2PokeathlonstatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstatnames_aggregate`, PokemonV2PokeathlonstatnameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Pokeathlonstat() {
  return new PokemonV2PokeathlonstatModelSelector()
}

export const pokemonV2PokeathlonstatModelPrimitives = selectFromPokemonV2Pokeathlonstat().name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EgggroupnameAggregateModel, PokemonV2EgggroupnameAggregateModelType } from "./PokemonV2EgggroupnameAggregateModel"
import { PokemonV2EgggroupnameAggregateModelSelector } from "./PokemonV2EgggroupnameAggregateModel.base"
import { PokemonV2EgggroupnameModel, PokemonV2EgggroupnameModelType } from "./PokemonV2EgggroupnameModel"
import { PokemonV2EgggroupnameModelSelector } from "./PokemonV2EgggroupnameModel.base"
import { PokemonV2PokemonegggroupAggregateModel, PokemonV2PokemonegggroupAggregateModelType } from "./PokemonV2PokemonegggroupAggregateModel"
import { PokemonV2PokemonegggroupAggregateModelSelector } from "./PokemonV2PokemonegggroupAggregateModel.base"
import { PokemonV2PokemonegggroupModel, PokemonV2PokemonegggroupModelType } from "./PokemonV2PokemonegggroupModel"
import { PokemonV2PokemonegggroupModelSelector } from "./PokemonV2PokemonegggroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupBase
 * auto generated base class for the model PokemonV2EgggroupModel.
 *
 * columns and relationships of "pokemon_v2_egggroup"
 */
export const PokemonV2EgggroupModelBase = ModelBase
  .named('PokemonV2Egggroup')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup"), "pokemon_v2_egggroup"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_egggroupnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2EgggroupnameModel))),
    /** An aggregate relationship */
    pokemon_v2_egggroupnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EgggroupnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonegggroups: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonegggroupModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonegggroups_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonegggroupAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_egggroupnames(builder?: string | PokemonV2EgggroupnameModelSelector | ((selector: PokemonV2EgggroupnameModelSelector) => PokemonV2EgggroupnameModelSelector)) { return this.__child(`pokemon_v2_egggroupnames`, PokemonV2EgggroupnameModelSelector, builder) }
  pokemon_v2_egggroupnames_aggregate(builder?: string | PokemonV2EgggroupnameAggregateModelSelector | ((selector: PokemonV2EgggroupnameAggregateModelSelector) => PokemonV2EgggroupnameAggregateModelSelector)) { return this.__child(`pokemon_v2_egggroupnames_aggregate`, PokemonV2EgggroupnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonegggroups(builder?: string | PokemonV2PokemonegggroupModelSelector | ((selector: PokemonV2PokemonegggroupModelSelector) => PokemonV2PokemonegggroupModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroups`, PokemonV2PokemonegggroupModelSelector, builder) }
  pokemon_v2_pokemonegggroups_aggregate(builder?: string | PokemonV2PokemonegggroupAggregateModelSelector | ((selector: PokemonV2PokemonegggroupAggregateModelSelector) => PokemonV2PokemonegggroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroups_aggregate`, PokemonV2PokemonegggroupAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Egggroup() {
  return new PokemonV2EgggroupModelSelector()
}

export const pokemonV2EgggroupModelPrimitives = selectFromPokemonV2Egggroup().name

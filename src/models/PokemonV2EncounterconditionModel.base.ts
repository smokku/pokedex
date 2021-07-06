/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionnameAggregateModel, PokemonV2EncounterconditionnameAggregateModelType } from "./PokemonV2EncounterconditionnameAggregateModel"
import { PokemonV2EncounterconditionnameAggregateModelSelector } from "./PokemonV2EncounterconditionnameAggregateModel.base"
import { PokemonV2EncounterconditionnameModel, PokemonV2EncounterconditionnameModelType } from "./PokemonV2EncounterconditionnameModel"
import { PokemonV2EncounterconditionnameModelSelector } from "./PokemonV2EncounterconditionnameModel.base"
import { PokemonV2EncounterconditionvalueAggregateModel, PokemonV2EncounterconditionvalueAggregateModelType } from "./PokemonV2EncounterconditionvalueAggregateModel"
import { PokemonV2EncounterconditionvalueAggregateModelSelector } from "./PokemonV2EncounterconditionvalueAggregateModel.base"
import { PokemonV2EncounterconditionvalueModel, PokemonV2EncounterconditionvalueModelType } from "./PokemonV2EncounterconditionvalueModel"
import { PokemonV2EncounterconditionvalueModelSelector } from "./PokemonV2EncounterconditionvalueModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionBase
 * auto generated base class for the model PokemonV2EncounterconditionModel.
 *
 * columns and relationships of "pokemon_v2_encountercondition"
 */
export const PokemonV2EncounterconditionModelBase = ModelBase
  .named('PokemonV2Encountercondition')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition"), "pokemon_v2_encountercondition"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_encounterconditionnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionnameModel))),
    /** An aggregate relationship */
    pokemon_v2_encounterconditionnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_encounterconditionvalues: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvalueModel))),
    /** An aggregate relationship */
    pokemon_v2_encounterconditionvalues_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionvalueAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_encounterconditionnames(builder?: string | PokemonV2EncounterconditionnameModelSelector | ((selector: PokemonV2EncounterconditionnameModelSelector) => PokemonV2EncounterconditionnameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionnames`, PokemonV2EncounterconditionnameModelSelector, builder) }
  pokemon_v2_encounterconditionnames_aggregate(builder?: string | PokemonV2EncounterconditionnameAggregateModelSelector | ((selector: PokemonV2EncounterconditionnameAggregateModelSelector) => PokemonV2EncounterconditionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionnames_aggregate`, PokemonV2EncounterconditionnameAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvalues(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalues`, PokemonV2EncounterconditionvalueModelSelector, builder) }
  pokemon_v2_encounterconditionvalues_aggregate(builder?: string | PokemonV2EncounterconditionvalueAggregateModelSelector | ((selector: PokemonV2EncounterconditionvalueAggregateModelSelector) => PokemonV2EncounterconditionvalueAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalues_aggregate`, PokemonV2EncounterconditionvalueAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Encountercondition() {
  return new PokemonV2EncounterconditionModelSelector()
}

export const pokemonV2EncounterconditionModelPrimitives = selectFromPokemonV2Encountercondition().name

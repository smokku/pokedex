/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterModel, PokemonV2EncounterModelType } from "./PokemonV2EncounterModel"
import { PokemonV2EncounterModelSelector } from "./PokemonV2EncounterModel.base"
import { PokemonV2EncounterconditionvalueModel, PokemonV2EncounterconditionvalueModelType } from "./PokemonV2EncounterconditionvalueModel"
import { PokemonV2EncounterconditionvalueModelSelector } from "./PokemonV2EncounterconditionvalueModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapModel.
 *
 * columns and relationships of "pokemon_v2_encounterconditionvaluemap"
 */
export const PokemonV2EncounterconditionvaluemapModelBase = ModelBase
  .named('PokemonV2Encounterconditionvaluemap')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap"), "pokemon_v2_encounterconditionvaluemap"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.integer),
    encounter_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemon_v2_encounter: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterModel)),
    /** An object relationship */
    pokemon_v2_encounterconditionvalue: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get encounter_id() { return this.__attr(`encounter_id`) }
  get id() { return this.__attr(`id`) }
  pokemon_v2_encounter(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounter`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encounterconditionvalue(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue`, PokemonV2EncounterconditionvalueModelSelector, builder) }
}
export function selectFromPokemonV2Encounterconditionvaluemap() {
  return new PokemonV2EncounterconditionvaluemapModelSelector()
}

export const pokemonV2EncounterconditionvaluemapModelPrimitives = selectFromPokemonV2Encounterconditionvaluemap().encounter_condition_value_id.encounter_id

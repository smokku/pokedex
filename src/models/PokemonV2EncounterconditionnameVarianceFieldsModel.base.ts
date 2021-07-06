/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname_variance_fields"), "pokemon_v2_encounterconditionname_variance_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameVarianceFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncounterconditionnameVarianceFields() {
  return new PokemonV2EncounterconditionnameVarianceFieldsModelSelector()
}

export const pokemonV2EncounterconditionnameVarianceFieldsModelPrimitives = selectFromPokemonV2EncounterconditionnameVarianceFields().encounter_condition_id.language_id

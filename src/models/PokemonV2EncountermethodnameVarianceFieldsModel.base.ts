/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EncountermethodnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_variance_fields"), "pokemon_v2_encountermethodname_variance_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameVarianceFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncountermethodnameVarianceFields() {
  return new PokemonV2EncountermethodnameVarianceFieldsModelSelector()
}

export const pokemonV2EncountermethodnameVarianceFieldsModelPrimitives = selectFromPokemonV2EncountermethodnameVarianceFields().encounter_method_id.language_id

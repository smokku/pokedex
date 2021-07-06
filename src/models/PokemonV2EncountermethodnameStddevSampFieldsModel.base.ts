/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncountermethodnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_stddev_samp_fields"), "pokemon_v2_encountermethodname_stddev_samp_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameStddevSampFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EncountermethodnameStddevSampFields() {
  return new PokemonV2EncountermethodnameStddevSampFieldsModelSelector()
}

export const pokemonV2EncountermethodnameStddevSampFieldsModelPrimitives = selectFromPokemonV2EncountermethodnameStddevSampFields().encounter_method_id.language_id

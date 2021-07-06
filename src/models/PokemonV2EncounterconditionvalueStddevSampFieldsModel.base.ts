/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueStddevSampFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterconditionvalueStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_stddev_samp_fields"), "pokemon_v2_encounterconditionvalue_stddev_samp_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueStddevSampFields() {
  return new PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueStddevSampFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueStddevSampFields().encounter_condition_id

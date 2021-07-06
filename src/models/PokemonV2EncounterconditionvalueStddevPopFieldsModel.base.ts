/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueStddevPopFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionvalueStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_stddev_pop_fields"), "pokemon_v2_encounterconditionvalue_stddev_pop_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueStddevPopFields() {
  return new PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueStddevPopFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueStddevPopFields().encounter_condition_id

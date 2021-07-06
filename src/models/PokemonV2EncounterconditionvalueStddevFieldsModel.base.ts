/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueStddevFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionvalueStddevFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_stddev_fields"), "pokemon_v2_encounterconditionvalue_stddev_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueStddevFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueStddevFields() {
  return new PokemonV2EncounterconditionvalueStddevFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueStddevFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueStddevFields().encounter_condition_id

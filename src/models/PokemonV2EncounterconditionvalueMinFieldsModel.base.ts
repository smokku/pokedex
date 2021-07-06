/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueMinFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionvalueMinFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_min_fields"), "pokemon_v2_encounterconditionvalue_min_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueMinFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncounterconditionvalueMinFields() {
  return new PokemonV2EncounterconditionvalueMinFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueMinFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueMinFields().encounter_condition_id.name

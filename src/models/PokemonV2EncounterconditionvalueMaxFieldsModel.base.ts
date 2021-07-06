/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueMaxFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionvalueMaxFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_max_fields"), "pokemon_v2_encounterconditionvalue_max_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueMaxFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncounterconditionvalueMaxFields() {
  return new PokemonV2EncounterconditionvalueMaxFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueMaxFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueMaxFields().encounter_condition_id.name

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionMaxFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionMaxFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_max_fields"), "pokemon_v2_encountercondition_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncounterconditionMaxFields() {
  return new PokemonV2EncounterconditionMaxFieldsModelSelector()
}

export const pokemonV2EncounterconditionMaxFieldsModelPrimitives = selectFromPokemonV2EncounterconditionMaxFields().name

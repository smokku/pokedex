/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionMinFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionMinFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_min_fields"), "pokemon_v2_encountercondition_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EncounterconditionMinFields() {
  return new PokemonV2EncounterconditionMinFieldsModelSelector()
}

export const pokemonV2EncounterconditionMinFieldsModelPrimitives = selectFromPokemonV2EncounterconditionMinFields().name

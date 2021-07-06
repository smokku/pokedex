/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderMaxFieldsBase
 * auto generated base class for the model PokemonV2GenderMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2GenderMaxFieldsModelBase = ModelBase
  .named('PokemonV2GenderMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_max_fields"), "pokemon_v2_gender_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2GenderMaxFields() {
  return new PokemonV2GenderMaxFieldsModelSelector()
}

export const pokemonV2GenderMaxFieldsModelPrimitives = selectFromPokemonV2GenderMaxFields().name

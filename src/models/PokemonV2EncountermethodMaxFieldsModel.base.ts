/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodMaxFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EncountermethodMaxFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_max_fields"), "pokemon_v2_encountermethod_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    order: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodMaxFields() {
  return new PokemonV2EncountermethodMaxFieldsModelSelector()
}

export const pokemonV2EncountermethodMaxFieldsModelPrimitives = selectFromPokemonV2EncountermethodMaxFields().name.order

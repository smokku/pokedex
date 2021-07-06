/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassMaxFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovedamageclassMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_max_fields"), "pokemon_v2_movedamageclass_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovedamageclassMaxFields() {
  return new PokemonV2MovedamageclassMaxFieldsModelSelector()
}

export const pokemonV2MovedamageclassMaxFieldsModelPrimitives = selectFromPokemonV2MovedamageclassMaxFields().name

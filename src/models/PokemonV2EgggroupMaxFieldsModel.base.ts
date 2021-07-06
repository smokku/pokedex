/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupMaxFieldsBase
 * auto generated base class for the model PokemonV2EgggroupMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EgggroupMaxFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_max_fields"), "pokemon_v2_egggroup_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EgggroupMaxFields() {
  return new PokemonV2EgggroupMaxFieldsModelSelector()
}

export const pokemonV2EgggroupMaxFieldsModelPrimitives = selectFromPokemonV2EgggroupMaxFields().name

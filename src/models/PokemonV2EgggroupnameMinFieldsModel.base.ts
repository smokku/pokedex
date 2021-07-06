/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameMinFieldsBase
 * auto generated base class for the model PokemonV2EgggroupnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EgggroupnameMinFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname_min_fields"), "pokemon_v2_egggroupname_min_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupnameMinFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EgggroupnameMinFields() {
  return new PokemonV2EgggroupnameMinFieldsModelSelector()
}

export const pokemonV2EgggroupnameMinFieldsModelPrimitives = selectFromPokemonV2EgggroupnameMinFields().egg_group_id.language_id.name

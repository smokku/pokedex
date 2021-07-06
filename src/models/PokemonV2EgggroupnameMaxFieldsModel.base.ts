/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameMaxFieldsBase
 * auto generated base class for the model PokemonV2EgggroupnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EgggroupnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname_max_fields"), "pokemon_v2_egggroupname_max_fields"),
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

export class PokemonV2EgggroupnameMaxFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EgggroupnameMaxFields() {
  return new PokemonV2EgggroupnameMaxFieldsModelSelector()
}

export const pokemonV2EgggroupnameMaxFieldsModelPrimitives = selectFromPokemonV2EgggroupnameMaxFields().egg_group_id.language_id.name

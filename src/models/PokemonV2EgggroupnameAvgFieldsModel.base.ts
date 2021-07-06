/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameAvgFieldsBase
 * auto generated base class for the model PokemonV2EgggroupnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EgggroupnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname_avg_fields"), "pokemon_v2_egggroupname_avg_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupnameAvgFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EgggroupnameAvgFields() {
  return new PokemonV2EgggroupnameAvgFieldsModelSelector()
}

export const pokemonV2EgggroupnameAvgFieldsModelPrimitives = selectFromPokemonV2EgggroupnameAvgFields().egg_group_id.language_id

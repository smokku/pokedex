/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameSumFieldsBase
 * auto generated base class for the model PokemonV2EgggroupnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EgggroupnameSumFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname_sum_fields"), "pokemon_v2_egggroupname_sum_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupnameSumFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EgggroupnameSumFields() {
  return new PokemonV2EgggroupnameSumFieldsModelSelector()
}

export const pokemonV2EgggroupnameSumFieldsModelPrimitives = selectFromPokemonV2EgggroupnameSumFields().egg_group_id.language_id

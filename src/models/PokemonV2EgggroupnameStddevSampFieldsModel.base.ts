/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2EgggroupnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EgggroupnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname_stddev_samp_fields"), "pokemon_v2_egggroupname_stddev_samp_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupnameStddevSampFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EgggroupnameStddevSampFields() {
  return new PokemonV2EgggroupnameStddevSampFieldsModelSelector()
}

export const pokemonV2EgggroupnameStddevSampFieldsModelPrimitives = selectFromPokemonV2EgggroupnameStddevSampFields().egg_group_id.language_id

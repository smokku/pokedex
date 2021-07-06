/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2TypenameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2TypenameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2TypenameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_stddev_pop_fields"), "pokemon_v2_typename_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameStddevPopFields() {
  return new PokemonV2TypenameStddevPopFieldsModelSelector()
}

export const pokemonV2TypenameStddevPopFieldsModelPrimitives = selectFromPokemonV2TypenameStddevPopFields().language_id.type_id

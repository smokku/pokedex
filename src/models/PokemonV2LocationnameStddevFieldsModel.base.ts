/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameStddevFieldsBase
 * auto generated base class for the model PokemonV2LocationnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_stddev_fields"), "pokemon_v2_locationname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationnameStddevFields() {
  return new PokemonV2LocationnameStddevFieldsModelSelector()
}

export const pokemonV2LocationnameStddevFieldsModelPrimitives = selectFromPokemonV2LocationnameStddevFields().language_id.location_id

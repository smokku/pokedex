/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2LocationnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_var_pop_fields"), "pokemon_v2_locationname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationnameVarPopFields() {
  return new PokemonV2LocationnameVarPopFieldsModelSelector()
}

export const pokemonV2LocationnameVarPopFieldsModelPrimitives = selectFromPokemonV2LocationnameVarPopFields().language_id.location_id

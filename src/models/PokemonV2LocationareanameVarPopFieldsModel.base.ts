/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameVarPopFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationareanameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_var_pop_fields"), "pokemon_v2_locationareaname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
}
export function selectFromPokemonV2LocationareanameVarPopFields() {
  return new PokemonV2LocationareanameVarPopFieldsModelSelector()
}

export const pokemonV2LocationareanameVarPopFieldsModelPrimitives = selectFromPokemonV2LocationareanameVarPopFields().language_id.location_area_id

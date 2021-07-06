/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameVarianceFieldsBase
 * auto generated base class for the model PokemonV2TypenameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2TypenameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2TypenameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_variance_fields"), "pokemon_v2_typename_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameVarianceFields() {
  return new PokemonV2TypenameVarianceFieldsModelSelector()
}

export const pokemonV2TypenameVarianceFieldsModelPrimitives = selectFromPokemonV2TypenameVarianceFields().language_id.type_id

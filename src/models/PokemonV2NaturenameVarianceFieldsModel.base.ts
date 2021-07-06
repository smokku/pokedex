/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturenameVarianceFieldsBase
 * auto generated base class for the model PokemonV2NaturenameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2NaturenameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2NaturenameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturename_variance_fields"), "pokemon_v2_naturename_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    nature_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturenameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturenameVarianceFields() {
  return new PokemonV2NaturenameVarianceFieldsModelSelector()
}

export const pokemonV2NaturenameVarianceFieldsModelPrimitives = selectFromPokemonV2NaturenameVarianceFields().language_id.nature_id

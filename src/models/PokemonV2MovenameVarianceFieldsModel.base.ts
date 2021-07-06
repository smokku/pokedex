/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovenameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovenameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovenameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_variance_fields"), "pokemon_v2_movename_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MovenameVarianceFields() {
  return new PokemonV2MovenameVarianceFieldsModelSelector()
}

export const pokemonV2MovenameVarianceFieldsModelPrimitives = selectFromPokemonV2MovenameVarianceFields().language_id.move_id

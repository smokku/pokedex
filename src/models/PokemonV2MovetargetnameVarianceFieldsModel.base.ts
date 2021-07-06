/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovetargetnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovetargetnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetname_variance_fields"), "pokemon_v2_movetargetname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_target_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetnameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
}
export function selectFromPokemonV2MovetargetnameVarianceFields() {
  return new PokemonV2MovetargetnameVarianceFieldsModelSelector()
}

export const pokemonV2MovetargetnameVarianceFieldsModelPrimitives = selectFromPokemonV2MovetargetnameVarianceFields().language_id.move_target_id

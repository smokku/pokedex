/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItemnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_variance_fields"), "pokemon_v2_itemname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemnameVarianceFields() {
  return new PokemonV2ItemnameVarianceFieldsModelSelector()
}

export const pokemonV2ItemnameVarianceFieldsModelPrimitives = selectFromPokemonV2ItemnameVarianceFields().item_id.language_id

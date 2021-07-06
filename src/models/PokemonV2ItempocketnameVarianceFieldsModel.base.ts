/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItempocketnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_variance_fields"), "pokemon_v2_itempocketname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItempocketnameVarianceFields() {
  return new PokemonV2ItempocketnameVarianceFieldsModelSelector()
}

export const pokemonV2ItempocketnameVarianceFieldsModelPrimitives = selectFromPokemonV2ItempocketnameVarianceFields().item_pocket_id.language_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItemeffecttextVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemeffecttextVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItemeffecttextVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext_variance_fields"), "pokemon_v2_itemeffecttext_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemeffecttextVarianceFields() {
  return new PokemonV2ItemeffecttextVarianceFieldsModelSelector()
}

export const pokemonV2ItemeffecttextVarianceFieldsModelPrimitives = selectFromPokemonV2ItemeffecttextVarianceFields().item_id.language_id

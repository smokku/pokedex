/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextAvgFieldsBase
 * auto generated base class for the model PokemonV2ItemeffecttextAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemeffecttextAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItemeffecttextAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext_avg_fields"), "pokemon_v2_itemeffecttext_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemeffecttextAvgFields() {
  return new PokemonV2ItemeffecttextAvgFieldsModelSelector()
}

export const pokemonV2ItemeffecttextAvgFieldsModelPrimitives = selectFromPokemonV2ItemeffecttextAvgFields().item_id.language_id

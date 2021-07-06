/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemeffecttextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemeffecttextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemeffecttextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext_stddev_pop_fields"), "pokemon_v2_itemeffecttext_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemeffecttextStddevPopFields() {
  return new PokemonV2ItemeffecttextStddevPopFieldsModelSelector()
}

export const pokemonV2ItemeffecttextStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemeffecttextStddevPopFields().item_id.language_id

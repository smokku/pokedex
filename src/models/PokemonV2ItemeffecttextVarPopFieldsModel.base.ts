/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemeffecttextVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemeffecttextVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemeffecttextVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext_var_pop_fields"), "pokemon_v2_itemeffecttext_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemeffecttextVarPopFields() {
  return new PokemonV2ItemeffecttextVarPopFieldsModelSelector()
}

export const pokemonV2ItemeffecttextVarPopFieldsModelPrimitives = selectFromPokemonV2ItemeffecttextVarPopFields().item_id.language_id

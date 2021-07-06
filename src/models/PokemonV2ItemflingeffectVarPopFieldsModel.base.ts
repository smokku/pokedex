/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemflingeffectVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_var_pop_fields"), "pokemon_v2_itemflingeffect_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemflingeffectVarPopFields() {
  return new PokemonV2ItemflingeffectVarPopFieldsModelSelector()
}

export const pokemonV2ItemflingeffectVarPopFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectVarPopFields()

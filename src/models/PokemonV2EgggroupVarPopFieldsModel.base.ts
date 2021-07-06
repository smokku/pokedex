/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupVarPopFieldsBase
 * auto generated base class for the model PokemonV2EgggroupVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EgggroupVarPopFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_var_pop_fields"), "pokemon_v2_egggroup_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EgggroupVarPopFields() {
  return new PokemonV2EgggroupVarPopFieldsModelSelector()
}

export const pokemonV2EgggroupVarPopFieldsModelPrimitives = selectFromPokemonV2EgggroupVarPopFields()

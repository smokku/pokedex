/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitynameVarPopFieldsBase
 * auto generated base class for the model PokemonV2AbilitynameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilitynameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2AbilitynameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityname_var_pop_fields"), "pokemon_v2_abilityname_var_pop_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitynameVarPopFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitynameVarPopFields() {
  return new PokemonV2AbilitynameVarPopFieldsModelSelector()
}

export const pokemonV2AbilitynameVarPopFieldsModelPrimitives = selectFromPokemonV2AbilitynameVarPopFields().ability_id.language_id

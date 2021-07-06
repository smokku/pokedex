/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonformVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonform_var_pop_fields"), "pokemon_v2_pokemonform_var_pop_fields"),
    form_order: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformVarPopFieldsModelSelector extends QueryBuilder {
  get form_order() { return this.__attr(`form_order`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokemonformVarPopFields() {
  return new PokemonV2PokemonformVarPopFieldsModelSelector()
}

export const pokemonV2PokemonformVarPopFieldsModelPrimitives = selectFromPokemonV2PokemonformVarPopFields().form_order.order.pokemon_id.version_group_id

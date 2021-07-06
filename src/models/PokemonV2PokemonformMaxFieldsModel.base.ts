/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonformMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonform_max_fields"), "pokemon_v2_pokemonform_max_fields"),
    form_name: types.union(types.undefined, types.null, types.string),
    form_order: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformMaxFieldsModelSelector extends QueryBuilder {
  get form_name() { return this.__attr(`form_name`) }
  get form_order() { return this.__attr(`form_order`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokemonformMaxFields() {
  return new PokemonV2PokemonformMaxFieldsModelSelector()
}

export const pokemonV2PokemonformMaxFieldsModelPrimitives = selectFromPokemonV2PokemonformMaxFields().form_name.form_order.name.order.pokemon_id.version_group_id

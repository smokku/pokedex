/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonformnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_stddev_fields"), "pokemon_v2_pokemonformname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformnameStddevFields() {
  return new PokemonV2PokemonformnameStddevFieldsModelSelector()
}

export const pokemonV2PokemonformnameStddevFieldsModelPrimitives = selectFromPokemonV2PokemonformnameStddevFields().language_id.pokemon_form_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemonformnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonformnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_variance_fields"), "pokemon_v2_pokemonformname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformnameVarianceFields() {
  return new PokemonV2PokemonformnameVarianceFieldsModelSelector()
}

export const pokemonV2PokemonformnameVarianceFieldsModelPrimitives = selectFromPokemonV2PokemonformnameVarianceFields().language_id.pokemon_form_id

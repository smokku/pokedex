/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonformspritesVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_variance_fields"), "pokemon_v2_pokemonformsprites_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesVarianceFields() {
  return new PokemonV2PokemonformspritesVarianceFieldsModelSelector()
}

export const pokemonV2PokemonformspritesVarianceFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesVarianceFields().pokemon_form_id

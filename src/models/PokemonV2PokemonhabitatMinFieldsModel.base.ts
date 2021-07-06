/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonhabitatMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitat_min_fields"), "pokemon_v2_pokemonhabitat_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2PokemonhabitatMinFields() {
  return new PokemonV2PokemonhabitatMinFieldsModelSelector()
}

export const pokemonV2PokemonhabitatMinFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatMinFields().name

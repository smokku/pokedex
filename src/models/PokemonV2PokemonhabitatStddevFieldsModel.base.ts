/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonhabitatStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitat_stddev_fields"), "pokemon_v2_pokemonhabitat_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemonhabitatStddevFields() {
  return new PokemonV2PokemonhabitatStddevFieldsModelSelector()
}

export const pokemonV2PokemonhabitatStddevFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatStddevFields()

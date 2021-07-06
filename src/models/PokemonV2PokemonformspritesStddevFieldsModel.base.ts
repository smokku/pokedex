/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformspritesStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_stddev_fields"), "pokemon_v2_pokemonformsprites_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesStddevFields() {
  return new PokemonV2PokemonformspritesStddevFieldsModelSelector()
}

export const pokemonV2PokemonformspritesStddevFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesStddevFields().pokemon_form_id

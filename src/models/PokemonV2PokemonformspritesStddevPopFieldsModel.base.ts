/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonformspritesStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_stddev_pop_fields"), "pokemon_v2_pokemonformsprites_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesStddevPopFields() {
  return new PokemonV2PokemonformspritesStddevPopFieldsModelSelector()
}

export const pokemonV2PokemonformspritesStddevPopFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesStddevPopFields().pokemon_form_id

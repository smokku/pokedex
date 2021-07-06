/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformspritesStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_stddev_samp_fields"), "pokemon_v2_pokemonformsprites_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesStddevSampFields() {
  return new PokemonV2PokemonformspritesStddevSampFieldsModelSelector()
}

export const pokemonV2PokemonformspritesStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesStddevSampFields().pokemon_form_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonformnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_stddev_samp_fields"), "pokemon_v2_pokemonformname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformnameStddevSampFields() {
  return new PokemonV2PokemonformnameStddevSampFieldsModelSelector()
}

export const pokemonV2PokemonformnameStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemonformnameStddevSampFields().language_id.pokemon_form_id

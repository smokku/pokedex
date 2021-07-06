/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonformStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonform_stddev_samp_fields"), "pokemon_v2_pokemonform_stddev_samp_fields"),
    form_order: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformStddevSampFieldsModelSelector extends QueryBuilder {
  get form_order() { return this.__attr(`form_order`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokemonformStddevSampFields() {
  return new PokemonV2PokemonformStddevSampFieldsModelSelector()
}

export const pokemonV2PokemonformStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemonformStddevSampFields().form_order.order.pokemon_id.version_group_id

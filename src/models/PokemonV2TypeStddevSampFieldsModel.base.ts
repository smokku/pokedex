/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeStddevSampFieldsBase
 * auto generated base class for the model PokemonV2TypeStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2TypeStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2TypeStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_stddev_samp_fields"), "pokemon_v2_type_stddev_samp_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeStddevSampFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2TypeStddevSampFields() {
  return new PokemonV2TypeStddevSampFieldsModelSelector()
}

export const pokemonV2TypeStddevSampFieldsModelPrimitives = selectFromPokemonV2TypeStddevSampFields().generation_id.move_damage_class_id

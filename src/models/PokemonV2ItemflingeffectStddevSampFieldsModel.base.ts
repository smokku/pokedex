/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemflingeffectStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_stddev_samp_fields"), "pokemon_v2_itemflingeffect_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemflingeffectStddevSampFields() {
  return new PokemonV2ItemflingeffectStddevSampFieldsModelSelector()
}

export const pokemonV2ItemflingeffectStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectStddevSampFields()

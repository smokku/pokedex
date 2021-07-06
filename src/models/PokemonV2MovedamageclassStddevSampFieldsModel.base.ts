/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovedamageclassStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_stddev_samp_fields"), "pokemon_v2_movedamageclass_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovedamageclassStddevSampFields() {
  return new PokemonV2MovedamageclassStddevSampFieldsModelSelector()
}

export const pokemonV2MovedamageclassStddevSampFieldsModelPrimitives = selectFromPokemonV2MovedamageclassStddevSampFields()

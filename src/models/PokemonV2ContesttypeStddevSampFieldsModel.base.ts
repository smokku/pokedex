/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesttypeStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_stddev_samp_fields"), "pokemon_v2_contesttype_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ContesttypeStddevSampFields() {
  return new PokemonV2ContesttypeStddevSampFieldsModelSelector()
}

export const pokemonV2ContesttypeStddevSampFieldsModelPrimitives = selectFromPokemonV2ContesttypeStddevSampFields()

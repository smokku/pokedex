/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderStddevFieldsBase
 * auto generated base class for the model PokemonV2GenderStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2GenderStddevFieldsModelBase = ModelBase
  .named('PokemonV2GenderStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_stddev_fields"), "pokemon_v2_gender_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GenderStddevFields() {
  return new PokemonV2GenderStddevFieldsModelSelector()
}

export const pokemonV2GenderStddevFieldsModelPrimitives = selectFromPokemonV2GenderStddevFields()

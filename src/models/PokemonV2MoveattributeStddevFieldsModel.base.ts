/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeStddevFieldsBase
 * auto generated base class for the model PokemonV2MoveattributeStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveattributeStddevFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributeStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute_stddev_fields"), "pokemon_v2_moveattribute_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveattributeStddevFields() {
  return new PokemonV2MoveattributeStddevFieldsModelSelector()
}

export const pokemonV2MoveattributeStddevFieldsModelPrimitives = selectFromPokemonV2MoveattributeStddevFields()

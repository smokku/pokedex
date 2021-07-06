/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MoveattributeStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveattributeStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributeStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute_stddev_pop_fields"), "pokemon_v2_moveattribute_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveattributeStddevPopFields() {
  return new PokemonV2MoveattributeStddevPopFieldsModelSelector()
}

export const pokemonV2MoveattributeStddevPopFieldsModelPrimitives = selectFromPokemonV2MoveattributeStddevPopFields()

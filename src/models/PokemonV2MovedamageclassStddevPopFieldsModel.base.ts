/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovedamageclassStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_stddev_pop_fields"), "pokemon_v2_movedamageclass_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovedamageclassStddevPopFields() {
  return new PokemonV2MovedamageclassStddevPopFieldsModelSelector()
}

export const pokemonV2MovedamageclassStddevPopFieldsModelPrimitives = selectFromPokemonV2MovedamageclassStddevPopFields()

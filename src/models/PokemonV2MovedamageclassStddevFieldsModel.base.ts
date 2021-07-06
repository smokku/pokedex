/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassStddevFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovedamageclassStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_stddev_fields"), "pokemon_v2_movedamageclass_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovedamageclassStddevFields() {
  return new PokemonV2MovedamageclassStddevFieldsModelSelector()
}

export const pokemonV2MovedamageclassStddevFieldsModelPrimitives = selectFromPokemonV2MovedamageclassStddevFields()

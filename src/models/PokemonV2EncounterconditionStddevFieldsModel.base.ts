/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionStddevFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionStddevFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_stddev_fields"), "pokemon_v2_encountercondition_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionStddevFields() {
  return new PokemonV2EncounterconditionStddevFieldsModelSelector()
}

export const pokemonV2EncounterconditionStddevFieldsModelPrimitives = selectFromPokemonV2EncounterconditionStddevFields()

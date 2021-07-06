/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionAvgFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionAvgFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_avg_fields"), "pokemon_v2_encountercondition_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionAvgFields() {
  return new PokemonV2EncounterconditionAvgFieldsModelSelector()
}

export const pokemonV2EncounterconditionAvgFieldsModelPrimitives = selectFromPokemonV2EncounterconditionAvgFields()

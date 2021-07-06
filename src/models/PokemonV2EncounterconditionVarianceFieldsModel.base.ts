/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionVarianceFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_variance_fields"), "pokemon_v2_encountercondition_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionVarianceFields() {
  return new PokemonV2EncounterconditionVarianceFieldsModelSelector()
}

export const pokemonV2EncounterconditionVarianceFieldsModelPrimitives = selectFromPokemonV2EncounterconditionVarianceFields()

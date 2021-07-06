/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectVarianceFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveeffectVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_variance_fields"), "pokemon_v2_moveeffect_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveeffectVarianceFields() {
  return new PokemonV2MoveeffectVarianceFieldsModelSelector()
}

export const pokemonV2MoveeffectVarianceFieldsModelPrimitives = selectFromPokemonV2MoveeffectVarianceFields()

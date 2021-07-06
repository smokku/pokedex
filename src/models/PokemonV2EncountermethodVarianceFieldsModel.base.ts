/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodVarianceFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EncountermethodVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_variance_fields"), "pokemon_v2_encountermethod_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodVarianceFields() {
  return new PokemonV2EncountermethodVarianceFieldsModelSelector()
}

export const pokemonV2EncountermethodVarianceFieldsModelPrimitives = selectFromPokemonV2EncountermethodVarianceFields().order

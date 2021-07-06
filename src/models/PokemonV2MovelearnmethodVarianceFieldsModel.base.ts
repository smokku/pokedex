/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovelearnmethodVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethod_variance_fields"), "pokemon_v2_movelearnmethod_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovelearnmethodVarianceFields() {
  return new PokemonV2MovelearnmethodVarianceFieldsModelSelector()
}

export const pokemonV2MovelearnmethodVarianceFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodVarianceFields()

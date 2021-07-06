/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerSumFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggerSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EvolutiontriggerSumFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggerSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger_sum_fields"), "pokemon_v2_evolutiontrigger_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutiontriggerSumFields() {
  return new PokemonV2EvolutiontriggerSumFieldsModelSelector()
}

export const pokemonV2EvolutiontriggerSumFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggerSumFields()

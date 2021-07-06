/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerAvgFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggerAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EvolutiontriggerAvgFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggerAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger_avg_fields"), "pokemon_v2_evolutiontrigger_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutiontriggerAvgFields() {
  return new PokemonV2EvolutiontriggerAvgFieldsModelSelector()
}

export const pokemonV2EvolutiontriggerAvgFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggerAvgFields()

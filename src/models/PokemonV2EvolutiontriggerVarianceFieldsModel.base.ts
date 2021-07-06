/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerVarianceFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggerVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EvolutiontriggerVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggerVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger_variance_fields"), "pokemon_v2_evolutiontrigger_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutiontriggerVarianceFields() {
  return new PokemonV2EvolutiontriggerVarianceFieldsModelSelector()
}

export const pokemonV2EvolutiontriggerVarianceFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggerVarianceFields()

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerVarSampFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggerVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EvolutiontriggerVarSampFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggerVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger_var_samp_fields"), "pokemon_v2_evolutiontrigger_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutiontriggerVarSampFields() {
  return new PokemonV2EvolutiontriggerVarSampFieldsModelSelector()
}

export const pokemonV2EvolutiontriggerVarSampFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggerVarSampFields()

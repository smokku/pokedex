/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerStddevFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggerStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EvolutiontriggerStddevFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggerStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger_stddev_fields"), "pokemon_v2_evolutiontrigger_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutiontriggerStddevFields() {
  return new PokemonV2EvolutiontriggerStddevFieldsModelSelector()
}

export const pokemonV2EvolutiontriggerStddevFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggerStddevFields()

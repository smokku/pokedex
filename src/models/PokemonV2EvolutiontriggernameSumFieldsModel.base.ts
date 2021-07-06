/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameSumFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EvolutiontriggernameSumFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_sum_fields"), "pokemon_v2_evolutiontriggername_sum_fields"),
    evolution_trigger_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameSumFieldsModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EvolutiontriggernameSumFields() {
  return new PokemonV2EvolutiontriggernameSumFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameSumFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameSumFields().evolution_trigger_id.language_id

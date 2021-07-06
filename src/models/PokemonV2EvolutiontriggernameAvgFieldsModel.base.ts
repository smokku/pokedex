/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameAvgFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EvolutiontriggernameAvgFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_avg_fields"), "pokemon_v2_evolutiontriggername_avg_fields"),
    evolution_trigger_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameAvgFieldsModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EvolutiontriggernameAvgFields() {
  return new PokemonV2EvolutiontriggernameAvgFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameAvgFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameAvgFields().evolution_trigger_id.language_id

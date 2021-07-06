/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameMaxFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EvolutiontriggernameMaxFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_max_fields"), "pokemon_v2_evolutiontriggername_max_fields"),
    evolution_trigger_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameMaxFieldsModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EvolutiontriggernameMaxFields() {
  return new PokemonV2EvolutiontriggernameMaxFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameMaxFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameMaxFields().evolution_trigger_id.language_id.name

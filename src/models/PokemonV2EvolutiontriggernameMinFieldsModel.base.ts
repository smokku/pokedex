/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameMinFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EvolutiontriggernameMinFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_min_fields"), "pokemon_v2_evolutiontriggername_min_fields"),
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

export class PokemonV2EvolutiontriggernameMinFieldsModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2EvolutiontriggernameMinFields() {
  return new PokemonV2EvolutiontriggernameMinFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameMinFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameMinFields().evolution_trigger_id.language_id.name

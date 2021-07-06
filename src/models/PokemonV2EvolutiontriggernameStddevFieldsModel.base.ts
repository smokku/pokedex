/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameStddevFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EvolutiontriggernameStddevFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_stddev_fields"), "pokemon_v2_evolutiontriggername_stddev_fields"),
    evolution_trigger_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameStddevFieldsModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EvolutiontriggernameStddevFields() {
  return new PokemonV2EvolutiontriggernameStddevFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameStddevFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameStddevFields().evolution_trigger_id.language_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EvolutiontriggernameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_stddev_samp_fields"), "pokemon_v2_evolutiontriggername_stddev_samp_fields"),
    evolution_trigger_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EvolutiontriggernameStddevSampFields() {
  return new PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameStddevSampFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameStddevSampFields().evolution_trigger_id.language_id

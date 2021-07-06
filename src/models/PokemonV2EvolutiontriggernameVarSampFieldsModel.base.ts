/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameVarSampFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EvolutiontriggernameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_var_samp_fields"), "pokemon_v2_evolutiontriggername_var_samp_fields"),
    evolution_trigger_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameVarSampFieldsModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2EvolutiontriggernameVarSampFields() {
  return new PokemonV2EvolutiontriggernameVarSampFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameVarSampFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameVarSampFields().evolution_trigger_id.language_id

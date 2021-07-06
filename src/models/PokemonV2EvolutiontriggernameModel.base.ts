/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutiontriggerModel, PokemonV2EvolutiontriggerModelType } from "./PokemonV2EvolutiontriggerModel"
import { PokemonV2EvolutiontriggerModelSelector } from "./PokemonV2EvolutiontriggerModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameModel.
 *
 * columns and relationships of "pokemon_v2_evolutiontriggername"
 */
export const PokemonV2EvolutiontriggernameModelBase = ModelBase
  .named('PokemonV2Evolutiontriggername')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername"), "pokemon_v2_evolutiontriggername"),
    evolution_trigger_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_evolutiontrigger: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameModelSelector extends QueryBuilder {
  get evolution_trigger_id() { return this.__attr(`evolution_trigger_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_evolutiontrigger(builder?: string | PokemonV2EvolutiontriggerModelSelector | ((selector: PokemonV2EvolutiontriggerModelSelector) => PokemonV2EvolutiontriggerModelSelector)) { return this.__child(`pokemon_v2_evolutiontrigger`, PokemonV2EvolutiontriggerModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Evolutiontriggername() {
  return new PokemonV2EvolutiontriggernameModelSelector()
}

export const pokemonV2EvolutiontriggernameModelPrimitives = selectFromPokemonV2Evolutiontriggername().evolution_trigger_id.language_id.name

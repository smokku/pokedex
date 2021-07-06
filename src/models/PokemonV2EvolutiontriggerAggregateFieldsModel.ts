import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerAggregateFieldsModelBase } from "./PokemonV2EvolutiontriggerAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerAggregateFieldsModel */
export interface PokemonV2EvolutiontriggerAggregateFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerAggregateFieldsModel */
export { selectFromPokemonV2EvolutiontriggerAggregateFields, pokemonV2EvolutiontriggerAggregateFieldsModelPrimitives, PokemonV2EvolutiontriggerAggregateFieldsModelSelector } from "./PokemonV2EvolutiontriggerAggregateFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_evolutiontrigger"
 */
export const PokemonV2EvolutiontriggerAggregateFieldsModel = PokemonV2EvolutiontriggerAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

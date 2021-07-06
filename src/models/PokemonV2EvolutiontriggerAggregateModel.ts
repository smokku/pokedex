import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerAggregateModelBase } from "./PokemonV2EvolutiontriggerAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerAggregateModel */
export interface PokemonV2EvolutiontriggerAggregateModelType extends Instance<typeof PokemonV2EvolutiontriggerAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerAggregateModel */
export { selectFromPokemonV2EvolutiontriggerAggregate, pokemonV2EvolutiontriggerAggregateModelPrimitives, PokemonV2EvolutiontriggerAggregateModelSelector } from "./PokemonV2EvolutiontriggerAggregateModel.base"

/**
 * PokemonV2EvolutiontriggerAggregateModel
 *
 * aggregated selection of "pokemon_v2_evolutiontrigger"
 */
export const PokemonV2EvolutiontriggerAggregateModel = PokemonV2EvolutiontriggerAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

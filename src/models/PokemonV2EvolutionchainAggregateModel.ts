import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainAggregateModelBase } from "./PokemonV2EvolutionchainAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainAggregateModel */
export interface PokemonV2EvolutionchainAggregateModelType extends Instance<typeof PokemonV2EvolutionchainAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainAggregateModel */
export { selectFromPokemonV2EvolutionchainAggregate, pokemonV2EvolutionchainAggregateModelPrimitives, PokemonV2EvolutionchainAggregateModelSelector } from "./PokemonV2EvolutionchainAggregateModel.base"

/**
 * PokemonV2EvolutionchainAggregateModel
 *
 * aggregated selection of "pokemon_v2_evolutionchain"
 */
export const PokemonV2EvolutionchainAggregateModel = PokemonV2EvolutionchainAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

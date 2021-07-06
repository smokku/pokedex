import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainAggregateFieldsModelBase } from "./PokemonV2EvolutionchainAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainAggregateFieldsModel */
export interface PokemonV2EvolutionchainAggregateFieldsModelType extends Instance<typeof PokemonV2EvolutionchainAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainAggregateFieldsModel */
export { selectFromPokemonV2EvolutionchainAggregateFields, pokemonV2EvolutionchainAggregateFieldsModelPrimitives, PokemonV2EvolutionchainAggregateFieldsModelSelector } from "./PokemonV2EvolutionchainAggregateFieldsModel.base"

/**
 * PokemonV2EvolutionchainAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_evolutionchain"
 */
export const PokemonV2EvolutionchainAggregateFieldsModel = PokemonV2EvolutionchainAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

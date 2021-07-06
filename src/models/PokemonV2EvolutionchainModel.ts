import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainModelBase } from "./PokemonV2EvolutionchainModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainModel */
export interface PokemonV2EvolutionchainModelType extends Instance<typeof PokemonV2EvolutionchainModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainModel */
export { selectFromPokemonV2Evolutionchain, pokemonV2EvolutionchainModelPrimitives, PokemonV2EvolutionchainModelSelector } from "./PokemonV2EvolutionchainModel.base"

/**
 * PokemonV2EvolutionchainModel
 *
 * columns and relationships of "pokemon_v2_evolutionchain"
 */
export const PokemonV2EvolutionchainModel = PokemonV2EvolutionchainModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

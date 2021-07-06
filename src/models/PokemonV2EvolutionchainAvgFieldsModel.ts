import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainAvgFieldsModelBase } from "./PokemonV2EvolutionchainAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainAvgFieldsModel */
export interface PokemonV2EvolutionchainAvgFieldsModelType extends Instance<typeof PokemonV2EvolutionchainAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainAvgFieldsModel */
export { selectFromPokemonV2EvolutionchainAvgFields, pokemonV2EvolutionchainAvgFieldsModelPrimitives, PokemonV2EvolutionchainAvgFieldsModelSelector } from "./PokemonV2EvolutionchainAvgFieldsModel.base"

/**
 * PokemonV2EvolutionchainAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EvolutionchainAvgFieldsModel = PokemonV2EvolutionchainAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainStddevPopFieldsModelBase } from "./PokemonV2EvolutionchainStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainStddevPopFieldsModel */
export interface PokemonV2EvolutionchainStddevPopFieldsModelType extends Instance<typeof PokemonV2EvolutionchainStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainStddevPopFieldsModel */
export { selectFromPokemonV2EvolutionchainStddevPopFields, pokemonV2EvolutionchainStddevPopFieldsModelPrimitives, PokemonV2EvolutionchainStddevPopFieldsModelSelector } from "./PokemonV2EvolutionchainStddevPopFieldsModel.base"

/**
 * PokemonV2EvolutionchainStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EvolutionchainStddevPopFieldsModel = PokemonV2EvolutionchainStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainStddevFieldsModelBase } from "./PokemonV2EvolutionchainStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainStddevFieldsModel */
export interface PokemonV2EvolutionchainStddevFieldsModelType extends Instance<typeof PokemonV2EvolutionchainStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainStddevFieldsModel */
export { selectFromPokemonV2EvolutionchainStddevFields, pokemonV2EvolutionchainStddevFieldsModelPrimitives, PokemonV2EvolutionchainStddevFieldsModelSelector } from "./PokemonV2EvolutionchainStddevFieldsModel.base"

/**
 * PokemonV2EvolutionchainStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EvolutionchainStddevFieldsModel = PokemonV2EvolutionchainStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

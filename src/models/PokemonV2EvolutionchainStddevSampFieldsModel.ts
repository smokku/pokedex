import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainStddevSampFieldsModelBase } from "./PokemonV2EvolutionchainStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainStddevSampFieldsModel */
export interface PokemonV2EvolutionchainStddevSampFieldsModelType extends Instance<typeof PokemonV2EvolutionchainStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainStddevSampFieldsModel */
export { selectFromPokemonV2EvolutionchainStddevSampFields, pokemonV2EvolutionchainStddevSampFieldsModelPrimitives, PokemonV2EvolutionchainStddevSampFieldsModelSelector } from "./PokemonV2EvolutionchainStddevSampFieldsModel.base"

/**
 * PokemonV2EvolutionchainStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EvolutionchainStddevSampFieldsModel = PokemonV2EvolutionchainStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

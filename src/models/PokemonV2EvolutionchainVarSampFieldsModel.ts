import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainVarSampFieldsModelBase } from "./PokemonV2EvolutionchainVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainVarSampFieldsModel */
export interface PokemonV2EvolutionchainVarSampFieldsModelType extends Instance<typeof PokemonV2EvolutionchainVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainVarSampFieldsModel */
export { selectFromPokemonV2EvolutionchainVarSampFields, pokemonV2EvolutionchainVarSampFieldsModelPrimitives, PokemonV2EvolutionchainVarSampFieldsModelSelector } from "./PokemonV2EvolutionchainVarSampFieldsModel.base"

/**
 * PokemonV2EvolutionchainVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EvolutionchainVarSampFieldsModel = PokemonV2EvolutionchainVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

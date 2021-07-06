import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainSumFieldsModelBase } from "./PokemonV2EvolutionchainSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainSumFieldsModel */
export interface PokemonV2EvolutionchainSumFieldsModelType extends Instance<typeof PokemonV2EvolutionchainSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainSumFieldsModel */
export { selectFromPokemonV2EvolutionchainSumFields, pokemonV2EvolutionchainSumFieldsModelPrimitives, PokemonV2EvolutionchainSumFieldsModelSelector } from "./PokemonV2EvolutionchainSumFieldsModel.base"

/**
 * PokemonV2EvolutionchainSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EvolutionchainSumFieldsModel = PokemonV2EvolutionchainSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

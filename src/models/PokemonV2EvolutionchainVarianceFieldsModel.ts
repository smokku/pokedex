import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainVarianceFieldsModelBase } from "./PokemonV2EvolutionchainVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainVarianceFieldsModel */
export interface PokemonV2EvolutionchainVarianceFieldsModelType extends Instance<typeof PokemonV2EvolutionchainVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainVarianceFieldsModel */
export { selectFromPokemonV2EvolutionchainVarianceFields, pokemonV2EvolutionchainVarianceFieldsModelPrimitives, PokemonV2EvolutionchainVarianceFieldsModelSelector } from "./PokemonV2EvolutionchainVarianceFieldsModel.base"

/**
 * PokemonV2EvolutionchainVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EvolutionchainVarianceFieldsModel = PokemonV2EvolutionchainVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

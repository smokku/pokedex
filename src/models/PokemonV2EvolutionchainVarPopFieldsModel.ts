import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainVarPopFieldsModelBase } from "./PokemonV2EvolutionchainVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainVarPopFieldsModel */
export interface PokemonV2EvolutionchainVarPopFieldsModelType extends Instance<typeof PokemonV2EvolutionchainVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainVarPopFieldsModel */
export { selectFromPokemonV2EvolutionchainVarPopFields, pokemonV2EvolutionchainVarPopFieldsModelPrimitives, PokemonV2EvolutionchainVarPopFieldsModelSelector } from "./PokemonV2EvolutionchainVarPopFieldsModel.base"

/**
 * PokemonV2EvolutionchainVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EvolutionchainVarPopFieldsModel = PokemonV2EvolutionchainVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

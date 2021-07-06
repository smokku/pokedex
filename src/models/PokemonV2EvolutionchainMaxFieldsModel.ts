import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainMaxFieldsModelBase } from "./PokemonV2EvolutionchainMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainMaxFieldsModel */
export interface PokemonV2EvolutionchainMaxFieldsModelType extends Instance<typeof PokemonV2EvolutionchainMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainMaxFieldsModel */
export { selectFromPokemonV2EvolutionchainMaxFields, pokemonV2EvolutionchainMaxFieldsModelPrimitives, PokemonV2EvolutionchainMaxFieldsModelSelector } from "./PokemonV2EvolutionchainMaxFieldsModel.base"

/**
 * PokemonV2EvolutionchainMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EvolutionchainMaxFieldsModel = PokemonV2EvolutionchainMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

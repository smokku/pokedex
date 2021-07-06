import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutionchainMinFieldsModelBase } from "./PokemonV2EvolutionchainMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutionchainMinFieldsModel */
export interface PokemonV2EvolutionchainMinFieldsModelType extends Instance<typeof PokemonV2EvolutionchainMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutionchainMinFieldsModel */
export { selectFromPokemonV2EvolutionchainMinFields, pokemonV2EvolutionchainMinFieldsModelPrimitives, PokemonV2EvolutionchainMinFieldsModelSelector } from "./PokemonV2EvolutionchainMinFieldsModel.base"

/**
 * PokemonV2EvolutionchainMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EvolutionchainMinFieldsModel = PokemonV2EvolutionchainMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

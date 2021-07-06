import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionAvgFieldsModelBase } from "./PokemonV2PokemonevolutionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionAvgFieldsModel */
export interface PokemonV2PokemonevolutionAvgFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionAvgFieldsModel */
export { selectFromPokemonV2PokemonevolutionAvgFields, pokemonV2PokemonevolutionAvgFieldsModelPrimitives, PokemonV2PokemonevolutionAvgFieldsModelSelector } from "./PokemonV2PokemonevolutionAvgFieldsModel.base"

/**
 * PokemonV2PokemonevolutionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonevolutionAvgFieldsModel = PokemonV2PokemonevolutionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

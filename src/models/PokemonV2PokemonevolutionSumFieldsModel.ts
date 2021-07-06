import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionSumFieldsModelBase } from "./PokemonV2PokemonevolutionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionSumFieldsModel */
export interface PokemonV2PokemonevolutionSumFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionSumFieldsModel */
export { selectFromPokemonV2PokemonevolutionSumFields, pokemonV2PokemonevolutionSumFieldsModelPrimitives, PokemonV2PokemonevolutionSumFieldsModelSelector } from "./PokemonV2PokemonevolutionSumFieldsModel.base"

/**
 * PokemonV2PokemonevolutionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonevolutionSumFieldsModel = PokemonV2PokemonevolutionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

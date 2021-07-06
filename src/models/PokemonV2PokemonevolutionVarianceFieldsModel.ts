import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionVarianceFieldsModelBase } from "./PokemonV2PokemonevolutionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionVarianceFieldsModel */
export interface PokemonV2PokemonevolutionVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionVarianceFieldsModel */
export { selectFromPokemonV2PokemonevolutionVarianceFields, pokemonV2PokemonevolutionVarianceFieldsModelPrimitives, PokemonV2PokemonevolutionVarianceFieldsModelSelector } from "./PokemonV2PokemonevolutionVarianceFieldsModel.base"

/**
 * PokemonV2PokemonevolutionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonevolutionVarianceFieldsModel = PokemonV2PokemonevolutionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

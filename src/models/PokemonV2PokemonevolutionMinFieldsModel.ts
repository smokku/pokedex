import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionMinFieldsModelBase } from "./PokemonV2PokemonevolutionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionMinFieldsModel */
export interface PokemonV2PokemonevolutionMinFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionMinFieldsModel */
export { selectFromPokemonV2PokemonevolutionMinFields, pokemonV2PokemonevolutionMinFieldsModelPrimitives, PokemonV2PokemonevolutionMinFieldsModelSelector } from "./PokemonV2PokemonevolutionMinFieldsModel.base"

/**
 * PokemonV2PokemonevolutionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonevolutionMinFieldsModel = PokemonV2PokemonevolutionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

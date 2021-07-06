import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionVarPopFieldsModelBase } from "./PokemonV2PokemonevolutionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionVarPopFieldsModel */
export interface PokemonV2PokemonevolutionVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionVarPopFieldsModel */
export { selectFromPokemonV2PokemonevolutionVarPopFields, pokemonV2PokemonevolutionVarPopFieldsModelPrimitives, PokemonV2PokemonevolutionVarPopFieldsModelSelector } from "./PokemonV2PokemonevolutionVarPopFieldsModel.base"

/**
 * PokemonV2PokemonevolutionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonevolutionVarPopFieldsModel = PokemonV2PokemonevolutionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

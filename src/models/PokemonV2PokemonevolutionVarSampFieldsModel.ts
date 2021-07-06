import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionVarSampFieldsModelBase } from "./PokemonV2PokemonevolutionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionVarSampFieldsModel */
export interface PokemonV2PokemonevolutionVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionVarSampFieldsModel */
export { selectFromPokemonV2PokemonevolutionVarSampFields, pokemonV2PokemonevolutionVarSampFieldsModelPrimitives, PokemonV2PokemonevolutionVarSampFieldsModelSelector } from "./PokemonV2PokemonevolutionVarSampFieldsModel.base"

/**
 * PokemonV2PokemonevolutionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonevolutionVarSampFieldsModel = PokemonV2PokemonevolutionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

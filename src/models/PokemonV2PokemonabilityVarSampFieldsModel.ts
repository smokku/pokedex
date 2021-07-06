import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityVarSampFieldsModelBase } from "./PokemonV2PokemonabilityVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityVarSampFieldsModel */
export interface PokemonV2PokemonabilityVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonabilityVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityVarSampFieldsModel */
export { selectFromPokemonV2PokemonabilityVarSampFields, pokemonV2PokemonabilityVarSampFieldsModelPrimitives, PokemonV2PokemonabilityVarSampFieldsModelSelector } from "./PokemonV2PokemonabilityVarSampFieldsModel.base"

/**
 * PokemonV2PokemonabilityVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonabilityVarSampFieldsModel = PokemonV2PokemonabilityVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

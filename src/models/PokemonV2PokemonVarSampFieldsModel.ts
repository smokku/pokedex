import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonVarSampFieldsModelBase } from "./PokemonV2PokemonVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonVarSampFieldsModel */
export interface PokemonV2PokemonVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonVarSampFieldsModel */
export { selectFromPokemonV2PokemonVarSampFields, pokemonV2PokemonVarSampFieldsModelPrimitives, PokemonV2PokemonVarSampFieldsModelSelector } from "./PokemonV2PokemonVarSampFieldsModel.base"

/**
 * PokemonV2PokemonVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonVarSampFieldsModel = PokemonV2PokemonVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeVarSampFieldsModelBase } from "./PokemonV2PokemonshapeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeVarSampFieldsModel */
export interface PokemonV2PokemonshapeVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonshapeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeVarSampFieldsModel */
export { selectFromPokemonV2PokemonshapeVarSampFields, pokemonV2PokemonshapeVarSampFieldsModelPrimitives, PokemonV2PokemonshapeVarSampFieldsModelSelector } from "./PokemonV2PokemonshapeVarSampFieldsModel.base"

/**
 * PokemonV2PokemonshapeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonshapeVarSampFieldsModel = PokemonV2PokemonshapeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatVarSampFieldsModelBase } from "./PokemonV2PokeathlonstatVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatVarSampFieldsModel */
export interface PokemonV2PokeathlonstatVarSampFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatVarSampFieldsModel */
export { selectFromPokemonV2PokeathlonstatVarSampFields, pokemonV2PokeathlonstatVarSampFieldsModelPrimitives, PokemonV2PokeathlonstatVarSampFieldsModelSelector } from "./PokemonV2PokeathlonstatVarSampFieldsModel.base"

/**
 * PokemonV2PokeathlonstatVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokeathlonstatVarSampFieldsModel = PokemonV2PokeathlonstatVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

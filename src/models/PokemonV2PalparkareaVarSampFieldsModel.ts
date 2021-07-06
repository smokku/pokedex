import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaVarSampFieldsModelBase } from "./PokemonV2PalparkareaVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaVarSampFieldsModel */
export interface PokemonV2PalparkareaVarSampFieldsModelType extends Instance<typeof PokemonV2PalparkareaVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaVarSampFieldsModel */
export { selectFromPokemonV2PalparkareaVarSampFields, pokemonV2PalparkareaVarSampFieldsModelPrimitives, PokemonV2PalparkareaVarSampFieldsModelSelector } from "./PokemonV2PalparkareaVarSampFieldsModel.base"

/**
 * PokemonV2PalparkareaVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PalparkareaVarSampFieldsModel = PokemonV2PalparkareaVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboVarSampFieldsModelBase } from "./PokemonV2SupercontestcomboVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboVarSampFieldsModel */
export interface PokemonV2SupercontestcomboVarSampFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboVarSampFieldsModel */
export { selectFromPokemonV2SupercontestcomboVarSampFields, pokemonV2SupercontestcomboVarSampFieldsModelPrimitives, PokemonV2SupercontestcomboVarSampFieldsModelSelector } from "./PokemonV2SupercontestcomboVarSampFieldsModel.base"

/**
 * PokemonV2SupercontestcomboVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2SupercontestcomboVarSampFieldsModel = PokemonV2SupercontestcomboVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

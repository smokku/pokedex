import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboVarSampFieldsModelBase } from "./PokemonV2ContestcomboVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboVarSampFieldsModel */
export interface PokemonV2ContestcomboVarSampFieldsModelType extends Instance<typeof PokemonV2ContestcomboVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboVarSampFieldsModel */
export { selectFromPokemonV2ContestcomboVarSampFields, pokemonV2ContestcomboVarSampFieldsModelPrimitives, PokemonV2ContestcomboVarSampFieldsModelSelector } from "./PokemonV2ContestcomboVarSampFieldsModel.base"

/**
 * PokemonV2ContestcomboVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContestcomboVarSampFieldsModel = PokemonV2ContestcomboVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

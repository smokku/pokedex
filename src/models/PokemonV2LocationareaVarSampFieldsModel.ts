import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaVarSampFieldsModelBase } from "./PokemonV2LocationareaVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaVarSampFieldsModel */
export interface PokemonV2LocationareaVarSampFieldsModelType extends Instance<typeof PokemonV2LocationareaVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaVarSampFieldsModel */
export { selectFromPokemonV2LocationareaVarSampFields, pokemonV2LocationareaVarSampFieldsModelPrimitives, PokemonV2LocationareaVarSampFieldsModelSelector } from "./PokemonV2LocationareaVarSampFieldsModel.base"

/**
 * PokemonV2LocationareaVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationareaVarSampFieldsModel = PokemonV2LocationareaVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

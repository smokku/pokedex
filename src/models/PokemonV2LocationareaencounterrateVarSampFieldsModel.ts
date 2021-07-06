import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateVarSampFieldsModelBase } from "./PokemonV2LocationareaencounterrateVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateVarSampFieldsModel */
export interface PokemonV2LocationareaencounterrateVarSampFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateVarSampFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateVarSampFields, pokemonV2LocationareaencounterrateVarSampFieldsModelPrimitives, PokemonV2LocationareaencounterrateVarSampFieldsModelSelector } from "./PokemonV2LocationareaencounterrateVarSampFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationareaencounterrateVarSampFieldsModel = PokemonV2LocationareaencounterrateVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

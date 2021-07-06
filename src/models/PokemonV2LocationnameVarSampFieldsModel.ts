import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameVarSampFieldsModelBase } from "./PokemonV2LocationnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameVarSampFieldsModel */
export interface PokemonV2LocationnameVarSampFieldsModelType extends Instance<typeof PokemonV2LocationnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameVarSampFieldsModel */
export { selectFromPokemonV2LocationnameVarSampFields, pokemonV2LocationnameVarSampFieldsModelPrimitives, PokemonV2LocationnameVarSampFieldsModelSelector } from "./PokemonV2LocationnameVarSampFieldsModel.base"

/**
 * PokemonV2LocationnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationnameVarSampFieldsModel = PokemonV2LocationnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

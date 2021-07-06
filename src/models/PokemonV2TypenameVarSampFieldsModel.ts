import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameVarSampFieldsModelBase } from "./PokemonV2TypenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameVarSampFieldsModel */
export interface PokemonV2TypenameVarSampFieldsModelType extends Instance<typeof PokemonV2TypenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameVarSampFieldsModel */
export { selectFromPokemonV2TypenameVarSampFields, pokemonV2TypenameVarSampFieldsModelPrimitives, PokemonV2TypenameVarSampFieldsModelSelector } from "./PokemonV2TypenameVarSampFieldsModel.base"

/**
 * PokemonV2TypenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2TypenameVarSampFieldsModel = PokemonV2TypenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

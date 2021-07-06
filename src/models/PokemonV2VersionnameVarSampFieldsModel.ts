import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameVarSampFieldsModelBase } from "./PokemonV2VersionnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameVarSampFieldsModel */
export interface PokemonV2VersionnameVarSampFieldsModelType extends Instance<typeof PokemonV2VersionnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameVarSampFieldsModel */
export { selectFromPokemonV2VersionnameVarSampFields, pokemonV2VersionnameVarSampFieldsModelPrimitives, PokemonV2VersionnameVarSampFieldsModelSelector } from "./PokemonV2VersionnameVarSampFieldsModel.base"

/**
 * PokemonV2VersionnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersionnameVarSampFieldsModel = PokemonV2VersionnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

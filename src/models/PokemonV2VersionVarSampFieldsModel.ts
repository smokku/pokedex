import { Instance } from "mobx-state-tree"
import { PokemonV2VersionVarSampFieldsModelBase } from "./PokemonV2VersionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionVarSampFieldsModel */
export interface PokemonV2VersionVarSampFieldsModelType extends Instance<typeof PokemonV2VersionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionVarSampFieldsModel */
export { selectFromPokemonV2VersionVarSampFields, pokemonV2VersionVarSampFieldsModelPrimitives, PokemonV2VersionVarSampFieldsModelSelector } from "./PokemonV2VersionVarSampFieldsModel.base"

/**
 * PokemonV2VersionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersionVarSampFieldsModel = PokemonV2VersionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

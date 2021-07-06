import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameVarSampFieldsModelBase } from "./PokemonV2GenerationnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameVarSampFieldsModel */
export interface PokemonV2GenerationnameVarSampFieldsModelType extends Instance<typeof PokemonV2GenerationnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameVarSampFieldsModel */
export { selectFromPokemonV2GenerationnameVarSampFields, pokemonV2GenerationnameVarSampFieldsModelPrimitives, PokemonV2GenerationnameVarSampFieldsModelSelector } from "./PokemonV2GenerationnameVarSampFieldsModel.base"

/**
 * PokemonV2GenerationnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2GenerationnameVarSampFieldsModel = PokemonV2GenerationnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

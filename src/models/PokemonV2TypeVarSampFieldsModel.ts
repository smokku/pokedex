import { Instance } from "mobx-state-tree"
import { PokemonV2TypeVarSampFieldsModelBase } from "./PokemonV2TypeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeVarSampFieldsModel */
export interface PokemonV2TypeVarSampFieldsModelType extends Instance<typeof PokemonV2TypeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeVarSampFieldsModel */
export { selectFromPokemonV2TypeVarSampFields, pokemonV2TypeVarSampFieldsModelPrimitives, PokemonV2TypeVarSampFieldsModelSelector } from "./PokemonV2TypeVarSampFieldsModel.base"

/**
 * PokemonV2TypeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2TypeVarSampFieldsModel = PokemonV2TypeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

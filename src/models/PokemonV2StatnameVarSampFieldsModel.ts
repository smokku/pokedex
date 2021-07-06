import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameVarSampFieldsModelBase } from "./PokemonV2StatnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameVarSampFieldsModel */
export interface PokemonV2StatnameVarSampFieldsModelType extends Instance<typeof PokemonV2StatnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameVarSampFieldsModel */
export { selectFromPokemonV2StatnameVarSampFields, pokemonV2StatnameVarSampFieldsModelPrimitives, PokemonV2StatnameVarSampFieldsModelSelector } from "./PokemonV2StatnameVarSampFieldsModel.base"

/**
 * PokemonV2StatnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2StatnameVarSampFieldsModel = PokemonV2StatnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

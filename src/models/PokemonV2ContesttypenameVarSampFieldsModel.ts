import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameVarSampFieldsModelBase } from "./PokemonV2ContesttypenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameVarSampFieldsModel */
export interface PokemonV2ContesttypenameVarSampFieldsModelType extends Instance<typeof PokemonV2ContesttypenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameVarSampFieldsModel */
export { selectFromPokemonV2ContesttypenameVarSampFields, pokemonV2ContesttypenameVarSampFieldsModelPrimitives, PokemonV2ContesttypenameVarSampFieldsModelSelector } from "./PokemonV2ContesttypenameVarSampFieldsModel.base"

/**
 * PokemonV2ContesttypenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContesttypenameVarSampFieldsModel = PokemonV2ContesttypenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

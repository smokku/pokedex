import { Instance } from "mobx-state-tree"
import { PokemonV2StatVarSampFieldsModelBase } from "./PokemonV2StatVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatVarSampFieldsModel */
export interface PokemonV2StatVarSampFieldsModelType extends Instance<typeof PokemonV2StatVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatVarSampFieldsModel */
export { selectFromPokemonV2StatVarSampFields, pokemonV2StatVarSampFieldsModelPrimitives, PokemonV2StatVarSampFieldsModelSelector } from "./PokemonV2StatVarSampFieldsModel.base"

/**
 * PokemonV2StatVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2StatVarSampFieldsModel = PokemonV2StatVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

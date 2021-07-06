import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorVarSampFieldsModelBase } from "./PokemonV2BerryflavorVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorVarSampFieldsModel */
export interface PokemonV2BerryflavorVarSampFieldsModelType extends Instance<typeof PokemonV2BerryflavorVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorVarSampFieldsModel */
export { selectFromPokemonV2BerryflavorVarSampFields, pokemonV2BerryflavorVarSampFieldsModelPrimitives, PokemonV2BerryflavorVarSampFieldsModelSelector } from "./PokemonV2BerryflavorVarSampFieldsModel.base"

/**
 * PokemonV2BerryflavorVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryflavorVarSampFieldsModel = PokemonV2BerryflavorVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

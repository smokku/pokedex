import { Instance } from "mobx-state-tree"
import { PokemonV2BerryVarSampFieldsModelBase } from "./PokemonV2BerryVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryVarSampFieldsModel */
export interface PokemonV2BerryVarSampFieldsModelType extends Instance<typeof PokemonV2BerryVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryVarSampFieldsModel */
export { selectFromPokemonV2BerryVarSampFields, pokemonV2BerryVarSampFieldsModelPrimitives, PokemonV2BerryVarSampFieldsModelSelector } from "./PokemonV2BerryVarSampFieldsModel.base"

/**
 * PokemonV2BerryVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryVarSampFieldsModel = PokemonV2BerryVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

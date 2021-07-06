import { Instance } from "mobx-state-tree"
import { PokemonV2LocationVarSampFieldsModelBase } from "./PokemonV2LocationVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationVarSampFieldsModel */
export interface PokemonV2LocationVarSampFieldsModelType extends Instance<typeof PokemonV2LocationVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationVarSampFieldsModel */
export { selectFromPokemonV2LocationVarSampFields, pokemonV2LocationVarSampFieldsModelPrimitives, PokemonV2LocationVarSampFieldsModelSelector } from "./PokemonV2LocationVarSampFieldsModel.base"

/**
 * PokemonV2LocationVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationVarSampFieldsModel = PokemonV2LocationVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

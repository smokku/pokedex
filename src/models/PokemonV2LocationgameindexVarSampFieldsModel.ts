import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexVarSampFieldsModelBase } from "./PokemonV2LocationgameindexVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexVarSampFieldsModel */
export interface PokemonV2LocationgameindexVarSampFieldsModelType extends Instance<typeof PokemonV2LocationgameindexVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexVarSampFieldsModel */
export { selectFromPokemonV2LocationgameindexVarSampFields, pokemonV2LocationgameindexVarSampFieldsModelPrimitives, PokemonV2LocationgameindexVarSampFieldsModelSelector } from "./PokemonV2LocationgameindexVarSampFieldsModel.base"

/**
 * PokemonV2LocationgameindexVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationgameindexVarSampFieldsModel = PokemonV2LocationgameindexVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

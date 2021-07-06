import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexVarSampFieldsModelBase } from "./PokemonV2TypegameindexVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexVarSampFieldsModel */
export interface PokemonV2TypegameindexVarSampFieldsModelType extends Instance<typeof PokemonV2TypegameindexVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexVarSampFieldsModel */
export { selectFromPokemonV2TypegameindexVarSampFields, pokemonV2TypegameindexVarSampFieldsModelPrimitives, PokemonV2TypegameindexVarSampFieldsModelSelector } from "./PokemonV2TypegameindexVarSampFieldsModel.base"

/**
 * PokemonV2TypegameindexVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2TypegameindexVarSampFieldsModel = PokemonV2TypegameindexVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

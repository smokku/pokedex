import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexVarSampFieldsModelBase } from "./PokemonV2ItemgameindexVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexVarSampFieldsModel */
export interface PokemonV2ItemgameindexVarSampFieldsModelType extends Instance<typeof PokemonV2ItemgameindexVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexVarSampFieldsModel */
export { selectFromPokemonV2ItemgameindexVarSampFields, pokemonV2ItemgameindexVarSampFieldsModelPrimitives, PokemonV2ItemgameindexVarSampFieldsModelSelector } from "./PokemonV2ItemgameindexVarSampFieldsModel.base"

/**
 * PokemonV2ItemgameindexVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemgameindexVarSampFieldsModel = PokemonV2ItemgameindexVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesVarSampFieldsModelBase } from "./PokemonV2PokemonspritesVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesVarSampFieldsModel */
export interface PokemonV2PokemonspritesVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonspritesVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesVarSampFieldsModel */
export { selectFromPokemonV2PokemonspritesVarSampFields, pokemonV2PokemonspritesVarSampFieldsModelPrimitives, PokemonV2PokemonspritesVarSampFieldsModelSelector } from "./PokemonV2PokemonspritesVarSampFieldsModel.base"

/**
 * PokemonV2PokemonspritesVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonspritesVarSampFieldsModel = PokemonV2PokemonspritesVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveVarSampFieldsModelBase } from "./PokemonV2PokemonmoveVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveVarSampFieldsModel */
export interface PokemonV2PokemonmoveVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonmoveVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveVarSampFieldsModel */
export { selectFromPokemonV2PokemonmoveVarSampFields, pokemonV2PokemonmoveVarSampFieldsModelPrimitives, PokemonV2PokemonmoveVarSampFieldsModelSelector } from "./PokemonV2PokemonmoveVarSampFieldsModel.base"

/**
 * PokemonV2PokemonmoveVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonmoveVarSampFieldsModel = PokemonV2PokemonmoveVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

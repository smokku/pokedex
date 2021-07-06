import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeVarSampFieldsModelBase } from "./PokemonV2PokemonformtypeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeVarSampFieldsModel */
export interface PokemonV2PokemonformtypeVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeVarSampFieldsModel */
export { selectFromPokemonV2PokemonformtypeVarSampFields, pokemonV2PokemonformtypeVarSampFieldsModelPrimitives, PokemonV2PokemonformtypeVarSampFieldsModelSelector } from "./PokemonV2PokemonformtypeVarSampFieldsModel.base"

/**
 * PokemonV2PokemonformtypeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonformtypeVarSampFieldsModel = PokemonV2PokemonformtypeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

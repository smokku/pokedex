import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationVarSampFieldsModelBase } from "./PokemonV2PokemonformgenerationVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationVarSampFieldsModel */
export interface PokemonV2PokemonformgenerationVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationVarSampFieldsModel */
export { selectFromPokemonV2PokemonformgenerationVarSampFields, pokemonV2PokemonformgenerationVarSampFieldsModelPrimitives, PokemonV2PokemonformgenerationVarSampFieldsModelSelector } from "./PokemonV2PokemonformgenerationVarSampFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonformgenerationVarSampFieldsModel = PokemonV2PokemonformgenerationVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformVarSampFieldsModelBase } from "./PokemonV2PokemonformVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformVarSampFieldsModel */
export interface PokemonV2PokemonformVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonformVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformVarSampFieldsModel */
export { selectFromPokemonV2PokemonformVarSampFields, pokemonV2PokemonformVarSampFieldsModelPrimitives, PokemonV2PokemonformVarSampFieldsModelSelector } from "./PokemonV2PokemonformVarSampFieldsModel.base"

/**
 * PokemonV2PokemonformVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonformVarSampFieldsModel = PokemonV2PokemonformVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

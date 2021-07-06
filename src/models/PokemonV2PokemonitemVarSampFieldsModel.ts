import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemVarSampFieldsModelBase } from "./PokemonV2PokemonitemVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemVarSampFieldsModel */
export interface PokemonV2PokemonitemVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonitemVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemVarSampFieldsModel */
export { selectFromPokemonV2PokemonitemVarSampFields, pokemonV2PokemonitemVarSampFieldsModelPrimitives, PokemonV2PokemonitemVarSampFieldsModelSelector } from "./PokemonV2PokemonitemVarSampFieldsModel.base"

/**
 * PokemonV2PokemonitemVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonitemVarSampFieldsModel = PokemonV2PokemonitemVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

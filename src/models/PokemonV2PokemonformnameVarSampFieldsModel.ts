import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameVarSampFieldsModelBase } from "./PokemonV2PokemonformnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameVarSampFieldsModel */
export interface PokemonV2PokemonformnameVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonformnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameVarSampFieldsModel */
export { selectFromPokemonV2PokemonformnameVarSampFields, pokemonV2PokemonformnameVarSampFieldsModelPrimitives, PokemonV2PokemonformnameVarSampFieldsModelSelector } from "./PokemonV2PokemonformnameVarSampFieldsModel.base"

/**
 * PokemonV2PokemonformnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonformnameVarSampFieldsModel = PokemonV2PokemonformnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

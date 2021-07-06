import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkVarSampFieldsModelBase } from "./PokemonV2PalparkVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkVarSampFieldsModel */
export interface PokemonV2PalparkVarSampFieldsModelType extends Instance<typeof PokemonV2PalparkVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkVarSampFieldsModel */
export { selectFromPokemonV2PalparkVarSampFields, pokemonV2PalparkVarSampFieldsModelPrimitives, PokemonV2PalparkVarSampFieldsModelSelector } from "./PokemonV2PalparkVarSampFieldsModel.base"

/**
 * PokemonV2PalparkVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PalparkVarSampFieldsModel = PokemonV2PalparkVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateVarSampFieldsModelBase } from "./PokemonV2GrowthrateVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateVarSampFieldsModel */
export interface PokemonV2GrowthrateVarSampFieldsModelType extends Instance<typeof PokemonV2GrowthrateVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateVarSampFieldsModel */
export { selectFromPokemonV2GrowthrateVarSampFields, pokemonV2GrowthrateVarSampFieldsModelPrimitives, PokemonV2GrowthrateVarSampFieldsModelSelector } from "./PokemonV2GrowthrateVarSampFieldsModel.base"

/**
 * PokemonV2GrowthrateVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2GrowthrateVarSampFieldsModel = PokemonV2GrowthrateVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

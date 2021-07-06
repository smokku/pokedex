import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextVarSampFieldsModelBase } from "./PokemonV2AbilityflavortextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextVarSampFieldsModel */
export interface PokemonV2AbilityflavortextVarSampFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextVarSampFieldsModel */
export { selectFromPokemonV2AbilityflavortextVarSampFields, pokemonV2AbilityflavortextVarSampFieldsModelPrimitives, PokemonV2AbilityflavortextVarSampFieldsModelSelector } from "./PokemonV2AbilityflavortextVarSampFieldsModel.base"

/**
 * PokemonV2AbilityflavortextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2AbilityflavortextVarSampFieldsModel = PokemonV2AbilityflavortextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

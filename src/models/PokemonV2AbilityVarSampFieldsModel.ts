import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityVarSampFieldsModelBase } from "./PokemonV2AbilityVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityVarSampFieldsModel */
export interface PokemonV2AbilityVarSampFieldsModelType extends Instance<typeof PokemonV2AbilityVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityVarSampFieldsModel */
export { selectFromPokemonV2AbilityVarSampFields, pokemonV2AbilityVarSampFieldsModelPrimitives, PokemonV2AbilityVarSampFieldsModelSelector } from "./PokemonV2AbilityVarSampFieldsModel.base"

/**
 * PokemonV2AbilityVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2AbilityVarSampFieldsModel = PokemonV2AbilityVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

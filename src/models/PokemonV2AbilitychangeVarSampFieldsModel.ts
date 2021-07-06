import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeVarSampFieldsModelBase } from "./PokemonV2AbilitychangeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeVarSampFieldsModel */
export interface PokemonV2AbilitychangeVarSampFieldsModelType extends Instance<typeof PokemonV2AbilitychangeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeVarSampFieldsModel */
export { selectFromPokemonV2AbilitychangeVarSampFields, pokemonV2AbilitychangeVarSampFieldsModelPrimitives, PokemonV2AbilitychangeVarSampFieldsModelSelector } from "./PokemonV2AbilitychangeVarSampFieldsModel.base"

/**
 * PokemonV2AbilitychangeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2AbilitychangeVarSampFieldsModel = PokemonV2AbilitychangeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

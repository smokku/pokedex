import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeVarPopFieldsModelBase } from "./PokemonV2AbilitychangeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeVarPopFieldsModel */
export interface PokemonV2AbilitychangeVarPopFieldsModelType extends Instance<typeof PokemonV2AbilitychangeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeVarPopFieldsModel */
export { selectFromPokemonV2AbilitychangeVarPopFields, pokemonV2AbilitychangeVarPopFieldsModelPrimitives, PokemonV2AbilitychangeVarPopFieldsModelSelector } from "./PokemonV2AbilitychangeVarPopFieldsModel.base"

/**
 * PokemonV2AbilitychangeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilitychangeVarPopFieldsModel = PokemonV2AbilitychangeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

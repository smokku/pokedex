import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityVarPopFieldsModelBase } from "./PokemonV2AbilityVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityVarPopFieldsModel */
export interface PokemonV2AbilityVarPopFieldsModelType extends Instance<typeof PokemonV2AbilityVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityVarPopFieldsModel */
export { selectFromPokemonV2AbilityVarPopFields, pokemonV2AbilityVarPopFieldsModelPrimitives, PokemonV2AbilityVarPopFieldsModelSelector } from "./PokemonV2AbilityVarPopFieldsModel.base"

/**
 * PokemonV2AbilityVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilityVarPopFieldsModel = PokemonV2AbilityVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

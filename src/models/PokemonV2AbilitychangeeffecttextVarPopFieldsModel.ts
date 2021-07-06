import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextVarPopFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextVarPopFieldsModel */
export interface PokemonV2AbilitychangeeffecttextVarPopFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextVarPopFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextVarPopFields, pokemonV2AbilitychangeeffecttextVarPopFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextVarPopFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilitychangeeffecttextVarPopFieldsModel = PokemonV2AbilitychangeeffecttextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

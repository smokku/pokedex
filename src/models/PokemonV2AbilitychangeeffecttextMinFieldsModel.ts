import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextMinFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextMinFieldsModel */
export interface PokemonV2AbilitychangeeffecttextMinFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextMinFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextMinFields, pokemonV2AbilitychangeeffecttextMinFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextMinFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextMinFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2AbilitychangeeffecttextMinFieldsModel = PokemonV2AbilitychangeeffecttextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

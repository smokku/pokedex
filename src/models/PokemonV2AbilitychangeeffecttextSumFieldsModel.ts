import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextSumFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextSumFieldsModel */
export interface PokemonV2AbilitychangeeffecttextSumFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextSumFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextSumFields, pokemonV2AbilitychangeeffecttextSumFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextSumFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextSumFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilitychangeeffecttextSumFieldsModel = PokemonV2AbilitychangeeffecttextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextAvgFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextAvgFieldsModel */
export interface PokemonV2AbilitychangeeffecttextAvgFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextAvgFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextAvgFields, pokemonV2AbilitychangeeffecttextAvgFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextAvgFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextAvgFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilitychangeeffecttextAvgFieldsModel = PokemonV2AbilitychangeeffecttextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

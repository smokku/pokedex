import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextVarianceFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextVarianceFieldsModel */
export interface PokemonV2AbilitychangeeffecttextVarianceFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextVarianceFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextVarianceFields, pokemonV2AbilitychangeeffecttextVarianceFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextVarianceFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilitychangeeffecttextVarianceFieldsModel = PokemonV2AbilitychangeeffecttextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

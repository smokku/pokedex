import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextMaxFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextMaxFieldsModel */
export interface PokemonV2AbilitychangeeffecttextMaxFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextMaxFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextMaxFields, pokemonV2AbilitychangeeffecttextMaxFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextMaxFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextMaxFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2AbilitychangeeffecttextMaxFieldsModel = PokemonV2AbilitychangeeffecttextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

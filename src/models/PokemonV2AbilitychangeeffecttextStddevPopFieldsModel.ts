import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextStddevPopFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextStddevPopFieldsModel */
export interface PokemonV2AbilitychangeeffecttextStddevPopFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextStddevPopFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextStddevPopFields, pokemonV2AbilitychangeeffecttextStddevPopFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextStddevPopFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilitychangeeffecttextStddevPopFieldsModel = PokemonV2AbilitychangeeffecttextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

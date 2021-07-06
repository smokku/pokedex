import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextStddevFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextStddevFieldsModel */
export interface PokemonV2AbilitychangeeffecttextStddevFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextStddevFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextStddevFields, pokemonV2AbilitychangeeffecttextStddevFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextStddevFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextStddevFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2AbilitychangeeffecttextStddevFieldsModel = PokemonV2AbilitychangeeffecttextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

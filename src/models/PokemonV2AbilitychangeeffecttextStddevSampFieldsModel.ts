import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextStddevSampFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextStddevSampFieldsModel */
export interface PokemonV2AbilitychangeeffecttextStddevSampFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextStddevSampFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextStddevSampFields, pokemonV2AbilitychangeeffecttextStddevSampFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextStddevSampFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilitychangeeffecttextStddevSampFieldsModel = PokemonV2AbilitychangeeffecttextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

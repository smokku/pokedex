import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextModelBase } from "./PokemonV2AbilitychangeeffecttextModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextModel */
export interface PokemonV2AbilitychangeeffecttextModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextModel */
export { selectFromPokemonV2Abilitychangeeffecttext, pokemonV2AbilitychangeeffecttextModelPrimitives, PokemonV2AbilitychangeeffecttextModelSelector } from "./PokemonV2AbilitychangeeffecttextModel.base"

/**
 * PokemonV2AbilitychangeeffecttextModel
 *
 * columns and relationships of "pokemon_v2_abilitychangeeffecttext"
 */
export const PokemonV2AbilitychangeeffecttextModel = PokemonV2AbilitychangeeffecttextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

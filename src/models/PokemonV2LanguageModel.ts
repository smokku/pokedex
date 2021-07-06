import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageModelBase } from "./PokemonV2LanguageModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageModel */
export interface PokemonV2LanguageModelType extends Instance<typeof PokemonV2LanguageModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageModel */
export { selectFromPokemonV2Language, pokemonV2LanguageModelPrimitives, PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"

/**
 * PokemonV2LanguageModel
 *
 * columns and relationships of "pokemon_v2_language"
 */
export const PokemonV2LanguageModel = PokemonV2LanguageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

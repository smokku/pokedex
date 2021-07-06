import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceModelBase } from "./PokemonV2NaturebattlestylepreferenceModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceModel */
export interface PokemonV2NaturebattlestylepreferenceModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceModel */
export { selectFromPokemonV2Naturebattlestylepreference, pokemonV2NaturebattlestylepreferenceModelPrimitives, PokemonV2NaturebattlestylepreferenceModelSelector } from "./PokemonV2NaturebattlestylepreferenceModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceModel
 *
 * columns and relationships of "pokemon_v2_naturebattlestylepreference"
 */
export const PokemonV2NaturebattlestylepreferenceModel = PokemonV2NaturebattlestylepreferenceModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

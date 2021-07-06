import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatModelBase } from "./PokemonV2NaturepokeathlonstatModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatModel */
export interface PokemonV2NaturepokeathlonstatModelType extends Instance<typeof PokemonV2NaturepokeathlonstatModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatModel */
export { selectFromPokemonV2Naturepokeathlonstat, pokemonV2NaturepokeathlonstatModelPrimitives, PokemonV2NaturepokeathlonstatModelSelector } from "./PokemonV2NaturepokeathlonstatModel.base"

/**
 * PokemonV2NaturepokeathlonstatModel
 *
 * columns and relationships of "pokemon_v2_naturepokeathlonstat"
 */
export const PokemonV2NaturepokeathlonstatModel = PokemonV2NaturepokeathlonstatModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

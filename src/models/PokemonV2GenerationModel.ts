import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationModelBase } from "./PokemonV2GenerationModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationModel */
export interface PokemonV2GenerationModelType extends Instance<typeof PokemonV2GenerationModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationModel */
export { selectFromPokemonV2Generation, pokemonV2GenerationModelPrimitives, PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"

/**
 * PokemonV2GenerationModel
 *
 * columns and relationships of "pokemon_v2_generation"
 */
export const PokemonV2GenerationModel = PokemonV2GenerationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

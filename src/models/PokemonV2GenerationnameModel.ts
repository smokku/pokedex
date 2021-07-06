import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameModelBase } from "./PokemonV2GenerationnameModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameModel */
export interface PokemonV2GenerationnameModelType extends Instance<typeof PokemonV2GenerationnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameModel */
export { selectFromPokemonV2Generationname, pokemonV2GenerationnameModelPrimitives, PokemonV2GenerationnameModelSelector } from "./PokemonV2GenerationnameModel.base"

/**
 * PokemonV2GenerationnameModel
 *
 * columns and relationships of "pokemon_v2_generationname"
 */
export const PokemonV2GenerationnameModel = PokemonV2GenerationnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

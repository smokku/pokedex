import { Instance } from "mobx-state-tree"
import { PokemonV2LocationModelBase } from "./PokemonV2LocationModel.base"

/* The TypeScript type of an instance of PokemonV2LocationModel */
export interface PokemonV2LocationModelType extends Instance<typeof PokemonV2LocationModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationModel */
export { selectFromPokemonV2Location, pokemonV2LocationModelPrimitives, PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"

/**
 * PokemonV2LocationModel
 *
 * columns and relationships of "pokemon_v2_location"
 */
export const PokemonV2LocationModel = PokemonV2LocationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

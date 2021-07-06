import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboModelBase } from "./PokemonV2SupercontestcomboModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboModel */
export interface PokemonV2SupercontestcomboModelType extends Instance<typeof PokemonV2SupercontestcomboModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboModel */
export { selectFromPokemonV2Supercontestcombo, pokemonV2SupercontestcomboModelPrimitives, PokemonV2SupercontestcomboModelSelector } from "./PokemonV2SupercontestcomboModel.base"

/**
 * PokemonV2SupercontestcomboModel
 *
 * columns and relationships of "pokemon_v2_supercontestcombo"
 */
export const PokemonV2SupercontestcomboModel = PokemonV2SupercontestcomboModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

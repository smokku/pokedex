import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboModelBase } from "./PokemonV2ContestcomboModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboModel */
export interface PokemonV2ContestcomboModelType extends Instance<typeof PokemonV2ContestcomboModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboModel */
export { selectFromPokemonV2Contestcombo, pokemonV2ContestcomboModelPrimitives, PokemonV2ContestcomboModelSelector } from "./PokemonV2ContestcomboModel.base"

/**
 * PokemonV2ContestcomboModel
 *
 * columns and relationships of "pokemon_v2_contestcombo"
 */
export const PokemonV2ContestcomboModel = PokemonV2ContestcomboModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

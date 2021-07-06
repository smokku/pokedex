import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleModelBase } from "./PokemonV2MovebattlestyleModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleModel */
export interface PokemonV2MovebattlestyleModelType extends Instance<typeof PokemonV2MovebattlestyleModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleModel */
export { selectFromPokemonV2Movebattlestyle, pokemonV2MovebattlestyleModelPrimitives, PokemonV2MovebattlestyleModelSelector } from "./PokemonV2MovebattlestyleModel.base"

/**
 * PokemonV2MovebattlestyleModel
 *
 * columns and relationships of "pokemon_v2_movebattlestyle"
 */
export const PokemonV2MovebattlestyleModel = PokemonV2MovebattlestyleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

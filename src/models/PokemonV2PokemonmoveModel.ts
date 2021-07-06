import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveModelBase } from "./PokemonV2PokemonmoveModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveModel */
export interface PokemonV2PokemonmoveModelType extends Instance<typeof PokemonV2PokemonmoveModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveModel */
export { selectFromPokemonV2Pokemonmove, pokemonV2PokemonmoveModelPrimitives, PokemonV2PokemonmoveModelSelector } from "./PokemonV2PokemonmoveModel.base"

/**
 * PokemonV2PokemonmoveModel
 *
 * columns and relationships of "pokemon_v2_pokemonmove"
 */
export const PokemonV2PokemonmoveModel = PokemonV2PokemonmoveModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

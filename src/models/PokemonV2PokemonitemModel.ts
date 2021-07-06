import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemModelBase } from "./PokemonV2PokemonitemModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemModel */
export interface PokemonV2PokemonitemModelType extends Instance<typeof PokemonV2PokemonitemModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemModel */
export { selectFromPokemonV2Pokemonitem, pokemonV2PokemonitemModelPrimitives, PokemonV2PokemonitemModelSelector } from "./PokemonV2PokemonitemModel.base"

/**
 * PokemonV2PokemonitemModel
 *
 * columns and relationships of "pokemon_v2_pokemonitem"
 */
export const PokemonV2PokemonitemModel = PokemonV2PokemonitemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

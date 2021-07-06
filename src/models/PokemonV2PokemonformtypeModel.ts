import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeModelBase } from "./PokemonV2PokemonformtypeModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeModel */
export interface PokemonV2PokemonformtypeModelType extends Instance<typeof PokemonV2PokemonformtypeModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeModel */
export { selectFromPokemonV2Pokemonformtype, pokemonV2PokemonformtypeModelPrimitives, PokemonV2PokemonformtypeModelSelector } from "./PokemonV2PokemonformtypeModel.base"

/**
 * PokemonV2PokemonformtypeModel
 *
 * columns and relationships of "pokemon_v2_pokemonformtype"
 */
export const PokemonV2PokemonformtypeModel = PokemonV2PokemonformtypeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeModelBase } from "./PokemonV2PokemontypeModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeModel */
export interface PokemonV2PokemontypeModelType extends Instance<typeof PokemonV2PokemontypeModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeModel */
export { selectFromPokemonV2Pokemontype, pokemonV2PokemontypeModelPrimitives, PokemonV2PokemontypeModelSelector } from "./PokemonV2PokemontypeModel.base"

/**
 * PokemonV2PokemontypeModel
 *
 * columns and relationships of "pokemon_v2_pokemontype"
 */
export const PokemonV2PokemontypeModel = PokemonV2PokemontypeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

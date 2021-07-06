import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatModelBase } from "./PokemonV2PokemonstatModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatModel */
export interface PokemonV2PokemonstatModelType extends Instance<typeof PokemonV2PokemonstatModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatModel */
export { selectFromPokemonV2Pokemonstat, pokemonV2PokemonstatModelPrimitives, PokemonV2PokemonstatModelSelector } from "./PokemonV2PokemonstatModel.base"

/**
 * PokemonV2PokemonstatModel
 *
 * columns and relationships of "pokemon_v2_pokemonstat"
 */
export const PokemonV2PokemonstatModel = PokemonV2PokemonstatModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

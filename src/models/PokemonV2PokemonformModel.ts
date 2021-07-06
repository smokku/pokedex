import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformModelBase } from "./PokemonV2PokemonformModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformModel */
export interface PokemonV2PokemonformModelType extends Instance<typeof PokemonV2PokemonformModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformModel */
export { selectFromPokemonV2Pokemonform, pokemonV2PokemonformModelPrimitives, PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"

/**
 * PokemonV2PokemonformModel
 *
 * columns and relationships of "pokemon_v2_pokemonform"
 */
export const PokemonV2PokemonformModel = PokemonV2PokemonformModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

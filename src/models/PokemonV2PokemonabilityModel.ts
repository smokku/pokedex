import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityModelBase } from "./PokemonV2PokemonabilityModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityModel */
export interface PokemonV2PokemonabilityModelType extends Instance<typeof PokemonV2PokemonabilityModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityModel */
export { selectFromPokemonV2Pokemonability, pokemonV2PokemonabilityModelPrimitives, PokemonV2PokemonabilityModelSelector } from "./PokemonV2PokemonabilityModel.base"

/**
 * PokemonV2PokemonabilityModel
 *
 * columns and relationships of "pokemon_v2_pokemonability"
 */
export const PokemonV2PokemonabilityModel = PokemonV2PokemonabilityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

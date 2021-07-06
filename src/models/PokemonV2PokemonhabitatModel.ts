import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatModelBase } from "./PokemonV2PokemonhabitatModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatModel */
export interface PokemonV2PokemonhabitatModelType extends Instance<typeof PokemonV2PokemonhabitatModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatModel */
export { selectFromPokemonV2Pokemonhabitat, pokemonV2PokemonhabitatModelPrimitives, PokemonV2PokemonhabitatModelSelector } from "./PokemonV2PokemonhabitatModel.base"

/**
 * PokemonV2PokemonhabitatModel
 *
 * columns and relationships of "pokemon_v2_pokemonhabitat"
 */
export const PokemonV2PokemonhabitatModel = PokemonV2PokemonhabitatModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

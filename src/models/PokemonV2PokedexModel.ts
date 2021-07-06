import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexModelBase } from "./PokemonV2PokedexModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexModel */
export interface PokemonV2PokedexModelType extends Instance<typeof PokemonV2PokedexModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexModel */
export { selectFromPokemonV2Pokedex, pokemonV2PokedexModelPrimitives, PokemonV2PokedexModelSelector } from "./PokemonV2PokedexModel.base"

/**
 * PokemonV2PokedexModel
 *
 * columns and relationships of "pokemon_v2_pokedex"
 */
export const PokemonV2PokedexModel = PokemonV2PokedexModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

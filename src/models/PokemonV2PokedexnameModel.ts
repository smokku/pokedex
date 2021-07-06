import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameModelBase } from "./PokemonV2PokedexnameModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameModel */
export interface PokemonV2PokedexnameModelType extends Instance<typeof PokemonV2PokedexnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameModel */
export { selectFromPokemonV2Pokedexname, pokemonV2PokedexnameModelPrimitives, PokemonV2PokedexnameModelSelector } from "./PokemonV2PokedexnameModel.base"

/**
 * PokemonV2PokedexnameModel
 *
 * columns and relationships of "pokemon_v2_pokedexname"
 */
export const PokemonV2PokedexnameModel = PokemonV2PokedexnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

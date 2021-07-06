import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionModelBase } from "./PokemonV2PokedexdescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionModel */
export interface PokemonV2PokedexdescriptionModelType extends Instance<typeof PokemonV2PokedexdescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionModel */
export { selectFromPokemonV2Pokedexdescription, pokemonV2PokedexdescriptionModelPrimitives, PokemonV2PokedexdescriptionModelSelector } from "./PokemonV2PokedexdescriptionModel.base"

/**
 * PokemonV2PokedexdescriptionModel
 *
 * columns and relationships of "pokemon_v2_pokedexdescription"
 */
export const PokemonV2PokedexdescriptionModel = PokemonV2PokedexdescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

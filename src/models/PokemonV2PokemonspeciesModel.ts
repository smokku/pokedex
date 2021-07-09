import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesModelBase } from "./PokemonV2PokemonspeciesModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesModel */
export interface PokemonV2PokemonspeciesModelType extends Instance<typeof PokemonV2PokemonspeciesModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesModel */
export { selectFromPokemonV2Pokemonspecies, pokemonV2PokemonspeciesModelPrimitives, PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"

/**
 * PokemonV2PokemonspeciesModel
 *
 * columns and relationships of "pokemon_v2_pokemonspecies"
 */
export const PokemonV2PokemonspeciesModel = PokemonV2PokemonspeciesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

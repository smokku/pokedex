import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesModelBase } from "./PokemonV2PokemonspritesModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesModel */
export interface PokemonV2PokemonspritesModelType extends Instance<typeof PokemonV2PokemonspritesModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesModel */
export { selectFromPokemonV2Pokemonsprites, pokemonV2PokemonspritesModelPrimitives, PokemonV2PokemonspritesModelSelector } from "./PokemonV2PokemonspritesModel.base"

/**
 * PokemonV2PokemonspritesModel
 *
 * columns and relationships of "pokemon_v2_pokemonsprites"
 */
export const PokemonV2PokemonspritesModel = PokemonV2PokemonspritesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesModelBase } from "./PokemonV2PokemonformspritesModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesModel */
export interface PokemonV2PokemonformspritesModelType extends Instance<typeof PokemonV2PokemonformspritesModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesModel */
export { selectFromPokemonV2Pokemonformsprites, pokemonV2PokemonformspritesModelPrimitives, PokemonV2PokemonformspritesModelSelector } from "./PokemonV2PokemonformspritesModel.base"

/**
 * PokemonV2PokemonformspritesModel
 *
 * columns and relationships of "pokemon_v2_pokemonformsprites"
 */
export const PokemonV2PokemonformspritesModel = PokemonV2PokemonformspritesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

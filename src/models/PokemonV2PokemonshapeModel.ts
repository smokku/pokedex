import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeModelBase } from "./PokemonV2PokemonshapeModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeModel */
export interface PokemonV2PokemonshapeModelType extends Instance<typeof PokemonV2PokemonshapeModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeModel */
export { selectFromPokemonV2Pokemonshape, pokemonV2PokemonshapeModelPrimitives, PokemonV2PokemonshapeModelSelector } from "./PokemonV2PokemonshapeModel.base"

/**
 * PokemonV2PokemonshapeModel
 *
 * columns and relationships of "pokemon_v2_pokemonshape"
 */
export const PokemonV2PokemonshapeModel = PokemonV2PokemonshapeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

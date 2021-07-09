import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameModelBase } from "./PokemonV2PokemoncolornameModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameModel */
export interface PokemonV2PokemoncolornameModelType extends Instance<typeof PokemonV2PokemoncolornameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameModel */
export { selectFromPokemonV2Pokemoncolorname, pokemonV2PokemoncolornameModelPrimitives, PokemonV2PokemoncolornameModelSelector } from "./PokemonV2PokemoncolornameModel.base"

/**
 * PokemonV2PokemoncolornameModel
 *
 * columns and relationships of "pokemon_v2_pokemoncolorname"
 */
export const PokemonV2PokemoncolornameModel = PokemonV2PokemoncolornameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

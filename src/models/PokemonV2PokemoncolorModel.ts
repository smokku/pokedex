import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorModelBase } from "./PokemonV2PokemoncolorModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorModel */
export interface PokemonV2PokemoncolorModelType extends Instance<typeof PokemonV2PokemoncolorModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorModel */
export { selectFromPokemonV2Pokemoncolor, pokemonV2PokemoncolorModelPrimitives, PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"

/**
 * PokemonV2PokemoncolorModel
 *
 * columns and relationships of "pokemon_v2_pokemoncolor"
 */
export const PokemonV2PokemoncolorModel = PokemonV2PokemoncolorModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexModelBase } from "./PokemonV2PokemongameindexModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexModel */
export interface PokemonV2PokemongameindexModelType extends Instance<typeof PokemonV2PokemongameindexModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexModel */
export { selectFromPokemonV2Pokemongameindex, pokemonV2PokemongameindexModelPrimitives, PokemonV2PokemongameindexModelSelector } from "./PokemonV2PokemongameindexModel.base"

/**
 * PokemonV2PokemongameindexModel
 *
 * columns and relationships of "pokemon_v2_pokemongameindex"
 */
export const PokemonV2PokemongameindexModel = PokemonV2PokemongameindexModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketModelBase } from "./PokemonV2ItempocketModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketModel */
export interface PokemonV2ItempocketModelType extends Instance<typeof PokemonV2ItempocketModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketModel */
export { selectFromPokemonV2Itempocket, pokemonV2ItempocketModelPrimitives, PokemonV2ItempocketModelSelector } from "./PokemonV2ItempocketModel.base"

/**
 * PokemonV2ItempocketModel
 *
 * columns and relationships of "pokemon_v2_itempocket"
 */
export const PokemonV2ItempocketModel = PokemonV2ItempocketModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

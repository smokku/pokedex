import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexModelBase } from "./PokemonV2ItemgameindexModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexModel */
export interface PokemonV2ItemgameindexModelType extends Instance<typeof PokemonV2ItemgameindexModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexModel */
export { selectFromPokemonV2Itemgameindex, pokemonV2ItemgameindexModelPrimitives, PokemonV2ItemgameindexModelSelector } from "./PokemonV2ItemgameindexModel.base"

/**
 * PokemonV2ItemgameindexModel
 *
 * columns and relationships of "pokemon_v2_itemgameindex"
 */
export const PokemonV2ItemgameindexModel = PokemonV2ItemgameindexModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

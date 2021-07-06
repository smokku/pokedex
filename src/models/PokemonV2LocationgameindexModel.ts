import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexModelBase } from "./PokemonV2LocationgameindexModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexModel */
export interface PokemonV2LocationgameindexModelType extends Instance<typeof PokemonV2LocationgameindexModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexModel */
export { selectFromPokemonV2Locationgameindex, pokemonV2LocationgameindexModelPrimitives, PokemonV2LocationgameindexModelSelector } from "./PokemonV2LocationgameindexModel.base"

/**
 * PokemonV2LocationgameindexModel
 *
 * columns and relationships of "pokemon_v2_locationgameindex"
 */
export const PokemonV2LocationgameindexModel = PokemonV2LocationgameindexModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

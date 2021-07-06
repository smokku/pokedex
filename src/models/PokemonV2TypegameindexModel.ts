import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexModelBase } from "./PokemonV2TypegameindexModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexModel */
export interface PokemonV2TypegameindexModelType extends Instance<typeof PokemonV2TypegameindexModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexModel */
export { selectFromPokemonV2Typegameindex, pokemonV2TypegameindexModelPrimitives, PokemonV2TypegameindexModelSelector } from "./PokemonV2TypegameindexModel.base"

/**
 * PokemonV2TypegameindexModel
 *
 * columns and relationships of "pokemon_v2_typegameindex"
 */
export const PokemonV2TypegameindexModel = PokemonV2TypegameindexModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

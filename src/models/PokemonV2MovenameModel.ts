import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameModelBase } from "./PokemonV2MovenameModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameModel */
export interface PokemonV2MovenameModelType extends Instance<typeof PokemonV2MovenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameModel */
export { selectFromPokemonV2Movename, pokemonV2MovenameModelPrimitives, PokemonV2MovenameModelSelector } from "./PokemonV2MovenameModel.base"

/**
 * PokemonV2MovenameModel
 *
 * columns and relationships of "pokemon_v2_movename"
 */
export const PokemonV2MovenameModel = PokemonV2MovenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

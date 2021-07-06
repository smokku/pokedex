import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameModelBase } from "./PokemonV2NaturenameModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameModel */
export interface PokemonV2NaturenameModelType extends Instance<typeof PokemonV2NaturenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameModel */
export { selectFromPokemonV2Naturename, pokemonV2NaturenameModelPrimitives, PokemonV2NaturenameModelSelector } from "./PokemonV2NaturenameModel.base"

/**
 * PokemonV2NaturenameModel
 *
 * columns and relationships of "pokemon_v2_naturename"
 */
export const PokemonV2NaturenameModel = PokemonV2NaturenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

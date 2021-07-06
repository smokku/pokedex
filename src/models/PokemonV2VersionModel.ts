import { Instance } from "mobx-state-tree"
import { PokemonV2VersionModelBase } from "./PokemonV2VersionModel.base"

/* The TypeScript type of an instance of PokemonV2VersionModel */
export interface PokemonV2VersionModelType extends Instance<typeof PokemonV2VersionModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionModel */
export { selectFromPokemonV2Version, pokemonV2VersionModelPrimitives, PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"

/**
 * PokemonV2VersionModel
 *
 * columns and relationships of "pokemon_v2_version"
 */
export const PokemonV2VersionModel = PokemonV2VersionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

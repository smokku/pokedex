import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameModelBase } from "./PokemonV2VersionnameModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameModel */
export interface PokemonV2VersionnameModelType extends Instance<typeof PokemonV2VersionnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameModel */
export { selectFromPokemonV2Versionname, pokemonV2VersionnameModelPrimitives, PokemonV2VersionnameModelSelector } from "./PokemonV2VersionnameModel.base"

/**
 * PokemonV2VersionnameModel
 *
 * columns and relationships of "pokemon_v2_versionname"
 */
export const PokemonV2VersionnameModel = PokemonV2VersionnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

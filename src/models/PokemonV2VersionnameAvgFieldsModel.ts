import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameAvgFieldsModelBase } from "./PokemonV2VersionnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameAvgFieldsModel */
export interface PokemonV2VersionnameAvgFieldsModelType extends Instance<typeof PokemonV2VersionnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameAvgFieldsModel */
export { selectFromPokemonV2VersionnameAvgFields, pokemonV2VersionnameAvgFieldsModelPrimitives, PokemonV2VersionnameAvgFieldsModelSelector } from "./PokemonV2VersionnameAvgFieldsModel.base"

/**
 * PokemonV2VersionnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2VersionnameAvgFieldsModel = PokemonV2VersionnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

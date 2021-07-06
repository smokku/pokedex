import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameStddevPopFieldsModelBase } from "./PokemonV2VersionnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameStddevPopFieldsModel */
export interface PokemonV2VersionnameStddevPopFieldsModelType extends Instance<typeof PokemonV2VersionnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameStddevPopFieldsModel */
export { selectFromPokemonV2VersionnameStddevPopFields, pokemonV2VersionnameStddevPopFieldsModelPrimitives, PokemonV2VersionnameStddevPopFieldsModelSelector } from "./PokemonV2VersionnameStddevPopFieldsModel.base"

/**
 * PokemonV2VersionnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersionnameStddevPopFieldsModel = PokemonV2VersionnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

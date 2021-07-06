import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameStddevFieldsModelBase } from "./PokemonV2VersionnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameStddevFieldsModel */
export interface PokemonV2VersionnameStddevFieldsModelType extends Instance<typeof PokemonV2VersionnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameStddevFieldsModel */
export { selectFromPokemonV2VersionnameStddevFields, pokemonV2VersionnameStddevFieldsModelPrimitives, PokemonV2VersionnameStddevFieldsModelSelector } from "./PokemonV2VersionnameStddevFieldsModel.base"

/**
 * PokemonV2VersionnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersionnameStddevFieldsModel = PokemonV2VersionnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

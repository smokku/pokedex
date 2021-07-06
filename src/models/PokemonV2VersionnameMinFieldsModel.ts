import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameMinFieldsModelBase } from "./PokemonV2VersionnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameMinFieldsModel */
export interface PokemonV2VersionnameMinFieldsModelType extends Instance<typeof PokemonV2VersionnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameMinFieldsModel */
export { selectFromPokemonV2VersionnameMinFields, pokemonV2VersionnameMinFieldsModelPrimitives, PokemonV2VersionnameMinFieldsModelSelector } from "./PokemonV2VersionnameMinFieldsModel.base"

/**
 * PokemonV2VersionnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2VersionnameMinFieldsModel = PokemonV2VersionnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

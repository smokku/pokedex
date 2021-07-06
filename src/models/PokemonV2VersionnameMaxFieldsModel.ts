import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameMaxFieldsModelBase } from "./PokemonV2VersionnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameMaxFieldsModel */
export interface PokemonV2VersionnameMaxFieldsModelType extends Instance<typeof PokemonV2VersionnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameMaxFieldsModel */
export { selectFromPokemonV2VersionnameMaxFields, pokemonV2VersionnameMaxFieldsModelPrimitives, PokemonV2VersionnameMaxFieldsModelSelector } from "./PokemonV2VersionnameMaxFieldsModel.base"

/**
 * PokemonV2VersionnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2VersionnameMaxFieldsModel = PokemonV2VersionnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

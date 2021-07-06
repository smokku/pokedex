import { Instance } from "mobx-state-tree"
import { PokemonV2VersionStddevFieldsModelBase } from "./PokemonV2VersionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionStddevFieldsModel */
export interface PokemonV2VersionStddevFieldsModelType extends Instance<typeof PokemonV2VersionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionStddevFieldsModel */
export { selectFromPokemonV2VersionStddevFields, pokemonV2VersionStddevFieldsModelPrimitives, PokemonV2VersionStddevFieldsModelSelector } from "./PokemonV2VersionStddevFieldsModel.base"

/**
 * PokemonV2VersionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersionStddevFieldsModel = PokemonV2VersionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2VersionStddevPopFieldsModelBase } from "./PokemonV2VersionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionStddevPopFieldsModel */
export interface PokemonV2VersionStddevPopFieldsModelType extends Instance<typeof PokemonV2VersionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionStddevPopFieldsModel */
export { selectFromPokemonV2VersionStddevPopFields, pokemonV2VersionStddevPopFieldsModelPrimitives, PokemonV2VersionStddevPopFieldsModelSelector } from "./PokemonV2VersionStddevPopFieldsModel.base"

/**
 * PokemonV2VersionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersionStddevPopFieldsModel = PokemonV2VersionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

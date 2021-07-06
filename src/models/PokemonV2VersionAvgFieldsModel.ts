import { Instance } from "mobx-state-tree"
import { PokemonV2VersionAvgFieldsModelBase } from "./PokemonV2VersionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionAvgFieldsModel */
export interface PokemonV2VersionAvgFieldsModelType extends Instance<typeof PokemonV2VersionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionAvgFieldsModel */
export { selectFromPokemonV2VersionAvgFields, pokemonV2VersionAvgFieldsModelPrimitives, PokemonV2VersionAvgFieldsModelSelector } from "./PokemonV2VersionAvgFieldsModel.base"

/**
 * PokemonV2VersionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2VersionAvgFieldsModel = PokemonV2VersionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

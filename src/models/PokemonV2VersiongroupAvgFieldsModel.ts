import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupAvgFieldsModelBase } from "./PokemonV2VersiongroupAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupAvgFieldsModel */
export interface PokemonV2VersiongroupAvgFieldsModelType extends Instance<typeof PokemonV2VersiongroupAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupAvgFieldsModel */
export { selectFromPokemonV2VersiongroupAvgFields, pokemonV2VersiongroupAvgFieldsModelPrimitives, PokemonV2VersiongroupAvgFieldsModelSelector } from "./PokemonV2VersiongroupAvgFieldsModel.base"

/**
 * PokemonV2VersiongroupAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2VersiongroupAvgFieldsModel = PokemonV2VersiongroupAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

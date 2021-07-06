import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionAvgFieldsModelBase } from "./PokemonV2VersiongroupregionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionAvgFieldsModel */
export interface PokemonV2VersiongroupregionAvgFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionAvgFieldsModel */
export { selectFromPokemonV2VersiongroupregionAvgFields, pokemonV2VersiongroupregionAvgFieldsModelPrimitives, PokemonV2VersiongroupregionAvgFieldsModelSelector } from "./PokemonV2VersiongroupregionAvgFieldsModel.base"

/**
 * PokemonV2VersiongroupregionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2VersiongroupregionAvgFieldsModel = PokemonV2VersiongroupregionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionMinFieldsModelBase } from "./PokemonV2VersiongroupregionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionMinFieldsModel */
export interface PokemonV2VersiongroupregionMinFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionMinFieldsModel */
export { selectFromPokemonV2VersiongroupregionMinFields, pokemonV2VersiongroupregionMinFieldsModelPrimitives, PokemonV2VersiongroupregionMinFieldsModelSelector } from "./PokemonV2VersiongroupregionMinFieldsModel.base"

/**
 * PokemonV2VersiongroupregionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2VersiongroupregionMinFieldsModel = PokemonV2VersiongroupregionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

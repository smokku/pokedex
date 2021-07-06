import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionSumFieldsModelBase } from "./PokemonV2VersiongroupregionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionSumFieldsModel */
export interface PokemonV2VersiongroupregionSumFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionSumFieldsModel */
export { selectFromPokemonV2VersiongroupregionSumFields, pokemonV2VersiongroupregionSumFieldsModelPrimitives, PokemonV2VersiongroupregionSumFieldsModelSelector } from "./PokemonV2VersiongroupregionSumFieldsModel.base"

/**
 * PokemonV2VersiongroupregionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2VersiongroupregionSumFieldsModel = PokemonV2VersiongroupregionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

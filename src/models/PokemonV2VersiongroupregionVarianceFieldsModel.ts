import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionVarianceFieldsModelBase } from "./PokemonV2VersiongroupregionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionVarianceFieldsModel */
export interface PokemonV2VersiongroupregionVarianceFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionVarianceFieldsModel */
export { selectFromPokemonV2VersiongroupregionVarianceFields, pokemonV2VersiongroupregionVarianceFieldsModelPrimitives, PokemonV2VersiongroupregionVarianceFieldsModelSelector } from "./PokemonV2VersiongroupregionVarianceFieldsModel.base"

/**
 * PokemonV2VersiongroupregionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2VersiongroupregionVarianceFieldsModel = PokemonV2VersiongroupregionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

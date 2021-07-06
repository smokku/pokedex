import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupVarianceFieldsModelBase } from "./PokemonV2VersiongroupVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupVarianceFieldsModel */
export interface PokemonV2VersiongroupVarianceFieldsModelType extends Instance<typeof PokemonV2VersiongroupVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupVarianceFieldsModel */
export { selectFromPokemonV2VersiongroupVarianceFields, pokemonV2VersiongroupVarianceFieldsModelPrimitives, PokemonV2VersiongroupVarianceFieldsModelSelector } from "./PokemonV2VersiongroupVarianceFieldsModel.base"

/**
 * PokemonV2VersiongroupVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2VersiongroupVarianceFieldsModel = PokemonV2VersiongroupVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupSumFieldsModelBase } from "./PokemonV2VersiongroupSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupSumFieldsModel */
export interface PokemonV2VersiongroupSumFieldsModelType extends Instance<typeof PokemonV2VersiongroupSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupSumFieldsModel */
export { selectFromPokemonV2VersiongroupSumFields, pokemonV2VersiongroupSumFieldsModelPrimitives, PokemonV2VersiongroupSumFieldsModelSelector } from "./PokemonV2VersiongroupSumFieldsModel.base"

/**
 * PokemonV2VersiongroupSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2VersiongroupSumFieldsModel = PokemonV2VersiongroupSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

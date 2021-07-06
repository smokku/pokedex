import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionStddevPopFieldsModelBase } from "./PokemonV2VersiongroupregionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionStddevPopFieldsModel */
export interface PokemonV2VersiongroupregionStddevPopFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionStddevPopFieldsModel */
export { selectFromPokemonV2VersiongroupregionStddevPopFields, pokemonV2VersiongroupregionStddevPopFieldsModelPrimitives, PokemonV2VersiongroupregionStddevPopFieldsModelSelector } from "./PokemonV2VersiongroupregionStddevPopFieldsModel.base"

/**
 * PokemonV2VersiongroupregionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersiongroupregionStddevPopFieldsModel = PokemonV2VersiongroupregionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

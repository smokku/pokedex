import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionStddevFieldsModelBase } from "./PokemonV2VersiongroupregionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionStddevFieldsModel */
export interface PokemonV2VersiongroupregionStddevFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionStddevFieldsModel */
export { selectFromPokemonV2VersiongroupregionStddevFields, pokemonV2VersiongroupregionStddevFieldsModelPrimitives, PokemonV2VersiongroupregionStddevFieldsModelSelector } from "./PokemonV2VersiongroupregionStddevFieldsModel.base"

/**
 * PokemonV2VersiongroupregionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersiongroupregionStddevFieldsModel = PokemonV2VersiongroupregionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

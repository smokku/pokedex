import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionStddevSampFieldsModelBase } from "./PokemonV2VersiongroupregionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionStddevSampFieldsModel */
export interface PokemonV2VersiongroupregionStddevSampFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionStddevSampFieldsModel */
export { selectFromPokemonV2VersiongroupregionStddevSampFields, pokemonV2VersiongroupregionStddevSampFieldsModelPrimitives, PokemonV2VersiongroupregionStddevSampFieldsModelSelector } from "./PokemonV2VersiongroupregionStddevSampFieldsModel.base"

/**
 * PokemonV2VersiongroupregionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersiongroupregionStddevSampFieldsModel = PokemonV2VersiongroupregionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

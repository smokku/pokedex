import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupStddevSampFieldsModelBase } from "./PokemonV2VersiongroupStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupStddevSampFieldsModel */
export interface PokemonV2VersiongroupStddevSampFieldsModelType extends Instance<typeof PokemonV2VersiongroupStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupStddevSampFieldsModel */
export { selectFromPokemonV2VersiongroupStddevSampFields, pokemonV2VersiongroupStddevSampFieldsModelPrimitives, PokemonV2VersiongroupStddevSampFieldsModelSelector } from "./PokemonV2VersiongroupStddevSampFieldsModel.base"

/**
 * PokemonV2VersiongroupStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersiongroupStddevSampFieldsModel = PokemonV2VersiongroupStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

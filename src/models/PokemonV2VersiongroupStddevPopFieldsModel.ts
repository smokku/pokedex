import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupStddevPopFieldsModelBase } from "./PokemonV2VersiongroupStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupStddevPopFieldsModel */
export interface PokemonV2VersiongroupStddevPopFieldsModelType extends Instance<typeof PokemonV2VersiongroupStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupStddevPopFieldsModel */
export { selectFromPokemonV2VersiongroupStddevPopFields, pokemonV2VersiongroupStddevPopFieldsModelPrimitives, PokemonV2VersiongroupStddevPopFieldsModelSelector } from "./PokemonV2VersiongroupStddevPopFieldsModel.base"

/**
 * PokemonV2VersiongroupStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersiongroupStddevPopFieldsModel = PokemonV2VersiongroupStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

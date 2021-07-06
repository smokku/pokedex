import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupStddevFieldsModelBase } from "./PokemonV2VersiongroupStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupStddevFieldsModel */
export interface PokemonV2VersiongroupStddevFieldsModelType extends Instance<typeof PokemonV2VersiongroupStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupStddevFieldsModel */
export { selectFromPokemonV2VersiongroupStddevFields, pokemonV2VersiongroupStddevFieldsModelPrimitives, PokemonV2VersiongroupStddevFieldsModelSelector } from "./PokemonV2VersiongroupStddevFieldsModel.base"

/**
 * PokemonV2VersiongroupStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersiongroupStddevFieldsModel = PokemonV2VersiongroupStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

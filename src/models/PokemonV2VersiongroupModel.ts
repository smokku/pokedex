import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupModelBase } from "./PokemonV2VersiongroupModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupModel */
export interface PokemonV2VersiongroupModelType extends Instance<typeof PokemonV2VersiongroupModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupModel */
export { selectFromPokemonV2Versiongroup, pokemonV2VersiongroupModelPrimitives, PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"

/**
 * PokemonV2VersiongroupModel
 *
 * columns and relationships of "pokemon_v2_versiongroup"
 */
export const PokemonV2VersiongroupModel = PokemonV2VersiongroupModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

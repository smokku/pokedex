import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionModelBase } from "./PokemonV2VersiongroupregionModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionModel */
export interface PokemonV2VersiongroupregionModelType extends Instance<typeof PokemonV2VersiongroupregionModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionModel */
export { selectFromPokemonV2Versiongroupregion, pokemonV2VersiongroupregionModelPrimitives, PokemonV2VersiongroupregionModelSelector } from "./PokemonV2VersiongroupregionModel.base"

/**
 * PokemonV2VersiongroupregionModel
 *
 * columns and relationships of "pokemon_v2_versiongroupregion"
 */
export const PokemonV2VersiongroupregionModel = PokemonV2VersiongroupregionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

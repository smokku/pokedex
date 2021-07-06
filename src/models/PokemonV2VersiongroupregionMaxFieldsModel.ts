import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionMaxFieldsModelBase } from "./PokemonV2VersiongroupregionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionMaxFieldsModel */
export interface PokemonV2VersiongroupregionMaxFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionMaxFieldsModel */
export { selectFromPokemonV2VersiongroupregionMaxFields, pokemonV2VersiongroupregionMaxFieldsModelPrimitives, PokemonV2VersiongroupregionMaxFieldsModelSelector } from "./PokemonV2VersiongroupregionMaxFieldsModel.base"

/**
 * PokemonV2VersiongroupregionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2VersiongroupregionMaxFieldsModel = PokemonV2VersiongroupregionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

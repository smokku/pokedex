import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionVarSampFieldsModelBase } from "./PokemonV2VersiongroupregionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionVarSampFieldsModel */
export interface PokemonV2VersiongroupregionVarSampFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionVarSampFieldsModel */
export { selectFromPokemonV2VersiongroupregionVarSampFields, pokemonV2VersiongroupregionVarSampFieldsModelPrimitives, PokemonV2VersiongroupregionVarSampFieldsModelSelector } from "./PokemonV2VersiongroupregionVarSampFieldsModel.base"

/**
 * PokemonV2VersiongroupregionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersiongroupregionVarSampFieldsModel = PokemonV2VersiongroupregionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

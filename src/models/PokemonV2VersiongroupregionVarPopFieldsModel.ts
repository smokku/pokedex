import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionVarPopFieldsModelBase } from "./PokemonV2VersiongroupregionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionVarPopFieldsModel */
export interface PokemonV2VersiongroupregionVarPopFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionVarPopFieldsModel */
export { selectFromPokemonV2VersiongroupregionVarPopFields, pokemonV2VersiongroupregionVarPopFieldsModelPrimitives, PokemonV2VersiongroupregionVarPopFieldsModelSelector } from "./PokemonV2VersiongroupregionVarPopFieldsModel.base"

/**
 * PokemonV2VersiongroupregionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2VersiongroupregionVarPopFieldsModel = PokemonV2VersiongroupregionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

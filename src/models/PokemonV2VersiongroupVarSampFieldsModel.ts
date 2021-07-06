import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupVarSampFieldsModelBase } from "./PokemonV2VersiongroupVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupVarSampFieldsModel */
export interface PokemonV2VersiongroupVarSampFieldsModelType extends Instance<typeof PokemonV2VersiongroupVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupVarSampFieldsModel */
export { selectFromPokemonV2VersiongroupVarSampFields, pokemonV2VersiongroupVarSampFieldsModelPrimitives, PokemonV2VersiongroupVarSampFieldsModelSelector } from "./PokemonV2VersiongroupVarSampFieldsModel.base"

/**
 * PokemonV2VersiongroupVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersiongroupVarSampFieldsModel = PokemonV2VersiongroupVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

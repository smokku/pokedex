import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupMinFieldsModelBase } from "./PokemonV2VersiongroupMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupMinFieldsModel */
export interface PokemonV2VersiongroupMinFieldsModelType extends Instance<typeof PokemonV2VersiongroupMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupMinFieldsModel */
export { selectFromPokemonV2VersiongroupMinFields, pokemonV2VersiongroupMinFieldsModelPrimitives, PokemonV2VersiongroupMinFieldsModelSelector } from "./PokemonV2VersiongroupMinFieldsModel.base"

/**
 * PokemonV2VersiongroupMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2VersiongroupMinFieldsModel = PokemonV2VersiongroupMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

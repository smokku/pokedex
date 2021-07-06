import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodMinFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodMinFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodMinFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodMinFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodMinFields, pokemonV2VersiongroupmovelearnmethodMinFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodMinFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2VersiongroupmovelearnmethodMinFieldsModel = PokemonV2VersiongroupmovelearnmethodMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

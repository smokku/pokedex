import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodAvgFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodAvgFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodAvgFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodAvgFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodAvgFields, pokemonV2VersiongroupmovelearnmethodAvgFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAvgFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2VersiongroupmovelearnmethodAvgFieldsModel = PokemonV2VersiongroupmovelearnmethodAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

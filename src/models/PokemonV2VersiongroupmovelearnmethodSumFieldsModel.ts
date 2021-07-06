import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodSumFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodSumFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodSumFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodSumFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodSumFields, pokemonV2VersiongroupmovelearnmethodSumFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodSumFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodSumFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2VersiongroupmovelearnmethodSumFieldsModel = PokemonV2VersiongroupmovelearnmethodSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

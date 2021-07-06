import { Instance } from "mobx-state-tree"
import { PokemonV2VersionSumFieldsModelBase } from "./PokemonV2VersionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionSumFieldsModel */
export interface PokemonV2VersionSumFieldsModelType extends Instance<typeof PokemonV2VersionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionSumFieldsModel */
export { selectFromPokemonV2VersionSumFields, pokemonV2VersionSumFieldsModelPrimitives, PokemonV2VersionSumFieldsModelSelector } from "./PokemonV2VersionSumFieldsModel.base"

/**
 * PokemonV2VersionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2VersionSumFieldsModel = PokemonV2VersionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
